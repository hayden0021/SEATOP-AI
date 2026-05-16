"use client";

import { useEffect } from "react";

const SEATOP_CONFIG = {
  email: "hello@seatop.ai",
  whatsapp: "60000000000",
};

export default function SiteEffects() {
  useEffect(() => {
    const cleanupCallbacks: Array<() => void> = [];

    const revealEls = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach((el) => revealObserver.observe(el));
    cleanupCallbacks.push(() => revealObserver.disconnect());

    const tiltTargets = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]"));
    tiltTargets.forEach((el) => {
      const strength = Number(el.dataset.tiltStrength || 5);
      const onMouseMove = (event: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        el.style.setProperty("--ry", `${x * strength}deg`);
        el.style.setProperty("--rx", `${-y * strength}deg`);
      };
      const onMouseLeave = () => {
        el.style.setProperty("--ry", "0deg");
        el.style.setProperty("--rx", "0deg");
      };
      el.addEventListener("mousemove", onMouseMove);
      el.addEventListener("mouseleave", onMouseLeave);
      cleanupCallbacks.push(() => {
        el.removeEventListener("mousemove", onMouseMove);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    });

    const filterButtons = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-filter]"));
    const productCards = Array.from(document.querySelectorAll<HTMLElement>("[data-category]"));
    filterButtons.forEach((btn) => {
      const onClick = () => {
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.dataset.filter;
        productCards.forEach((card) => {
          const show = filter === "all" || card.dataset.category === filter;
          card.style.display = show ? "" : "none";
        });
      };
      btn.addEventListener("click", onClick);
      cleanupCallbacks.push(() => btn.removeEventListener("click", onClick));
    });

    const shortlist = new Map<string, { name: string; price: string }>();
    const shortlistCount = document.querySelector<HTMLElement>("[data-shortlist-count]");
    const shortlistValue = document.querySelector<HTMLElement>("[data-shortlist-value]");
    const shortlistEmail = document.querySelector<HTMLButtonElement>("[data-shortlist-email]");

    const updateShortlist = () => {
      const items = Array.from(shortlist.values());
      const total = items.reduce((sum, item) => sum + Number(item.price || 0), 0);
      if (shortlistCount) shortlistCount.textContent = String(items.length);
      if (shortlistValue) shortlistValue.textContent = `RM ${total.toFixed(2)}`;
      if (shortlistEmail) shortlistEmail.disabled = items.length === 0;
    };

    const addButtons = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-add-product]"));
    addButtons.forEach((btn) => {
      const onClick = () => {
        const card = btn.closest<HTMLElement>("[data-product-name]");
        if (!card) return;
        const name = card.dataset.productName || "Product";
        const price = card.dataset.price || "0";
        if (shortlist.has(name)) {
          shortlist.delete(name);
          btn.textContent = "Add to Shortlist";
          btn.classList.remove("btn-primary");
          btn.classList.add("btn-ghost");
        } else {
          shortlist.set(name, { name, price });
          btn.textContent = "Added ✓";
          btn.classList.add("btn-primary");
          btn.classList.remove("btn-ghost");
        }
        updateShortlist();
      };
      btn.addEventListener("click", onClick);
      cleanupCallbacks.push(() => btn.removeEventListener("click", onClick));
    });

    if (shortlistEmail) {
      const onShortlistEmail = () => {
        const items = Array.from(shortlist.values()).map((item, index) => `${index + 1}. ${item.name} — RM ${item.price}`).join("
");
        const subject = encodeURIComponent("SEATOP AI Dropshipping Product Quote");
        const body = encodeURIComponent(`Hi SEATOP AI,

I am interested in these products:
${items}

Please send sourcing, pricing and delivery details.

Thank you.`);
        window.location.href = `mailto:${SEATOP_CONFIG.email}?subject=${subject}&body=${body}`;
      };
      shortlistEmail.addEventListener("click", onShortlistEmail);
      cleanupCallbacks.push(() => shortlistEmail.removeEventListener("click", onShortlistEmail));
    }
    updateShortlist();

    const profitOutput = document.querySelector<HTMLElement>("[data-profit-output]");
    const calcInputs = Array.from(document.querySelectorAll<HTMLInputElement>("[data-calc]"));
    const calculateMargin = () => {
      if (!profitOutput) return;
      const selling = Number(document.querySelector<HTMLInputElement>('[data-calc="selling"]')?.value || 0);
      const cost = Number(document.querySelector<HTMLInputElement>('[data-calc="cost"]')?.value || 0);
      const shipping = Number(document.querySelector<HTMLInputElement>('[data-calc="shipping"]')?.value || 0);
      const fees = Number(document.querySelector<HTMLInputElement>('[data-calc="fees"]')?.value || 0);
      const profit = selling - cost - shipping - fees;
      const margin = selling > 0 ? (profit / selling) * 100 : 0;
      profitOutput.textContent = `RM ${profit.toFixed(2)} / ${margin.toFixed(1)}%`;
    };
    calcInputs.forEach((input) => {
      input.addEventListener("input", calculateMargin);
      cleanupCallbacks.push(() => input.removeEventListener("input", calculateMargin));
    });
    calculateMargin();

    const forms = Array.from(document.querySelectorAll<HTMLFormElement>("[data-seatop-form]"));
    forms.forEach((form) => {
      const onSubmit = (event: SubmitEvent) => {
        event.preventDefault();
        const formData = new FormData(form);
        const lines: string[] = [];
        formData.forEach((value, key) => lines.push(`${key}: ${value}`));
        const service = formData.get("Service") || "SEATOP AI Enquiry";
        const subject = encodeURIComponent(`SEATOP AI Enquiry — ${service}`);
        const body = encodeURIComponent(lines.join("
"));
        window.location.href = `mailto:${SEATOP_CONFIG.email}?subject=${subject}&body=${body}`;
      };
      form.addEventListener("submit", onSubmit);
      cleanupCallbacks.push(() => form.removeEventListener("submit", onSubmit));
    });

    const newsletterForms = Array.from(document.querySelectorAll<HTMLFormElement>("[data-newsletter]"));
    newsletterForms.forEach((form) => {
      const onSubmit = (event: SubmitEvent) => {
        event.preventDefault();
        const email = new FormData(form).get("email") || "";
        const subject = encodeURIComponent("SEATOP AI Newsletter Signup");
        const body = encodeURIComponent(`Please add this email to SEATOP AI updates: ${email}`);
        window.location.href = `mailto:${SEATOP_CONFIG.email}?subject=${subject}&body=${body}`;
      };
      form.addEventListener("submit", onSubmit);
      cleanupCallbacks.push(() => form.removeEventListener("submit", onSubmit));
    });

    const whatsappLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-whatsapp]"));
    whatsappLinks.forEach((link) => {
      link.href = `https://wa.me/${SEATOP_CONFIG.whatsapp}?text=${encodeURIComponent("Hi SEATOP AI, I would like to discuss your AI solutions.")}`;
    });

    return () => cleanupCallbacks.forEach((cleanup) => cleanup());
  }, []);

  return null;
}
