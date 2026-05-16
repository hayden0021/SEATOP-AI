import type { PageKey } from "./pages";

export const pageEnhancements: Partial<Record<PageKey, string>> = {
  home: `
<section class="section reference-dashboard">
  <div class="container platform-split">
    <div class="reveal"><span class="section-kicker">DROPSHIPPING INTELLIGENCE</span><h2>Data That Finds Winners.</h2><p>Our intelligence platform analyzes product categories, supplier readiness and market signals to surface practical product opportunities for online commerce.</p><ul class="check-list"><li>Winning product discovery</li><li>Supplier and competitor analysis</li><li>Market and trend insights</li><li>Real-time performance tracking</li></ul><a class="btn btn-primary" href="/ai-dropshipping">Explore Platform <span class="btn-icon">›</span></a></div>
    <div class="analytics-console reveal" aria-hidden="true">
      <div class="console-sidebar"><img src="/assets/seatop-mark.png" alt=""/><span>Overview</span><span>Products</span><span>Suppliers</span><span>Orders</span><span>Analytics</span></div>
      <div class="console-main">
        <div class="console-top"><b>Overview</b><span>⌕ ↗</span></div>
        <div class="metric-row"><div><span>Total Revenue</span><b>$12.45M</b><em>+18.6%</em></div><div><span>Orders</span><b>152,680</b><em>+21.4%</em></div><div><span>Profit</span><b>$3.68M</b><em>+16.2%</em></div><div><span>ROI</span><b>2.94x</b><em>+11.7%</em></div></div>
        <div class="chart-panel"><div class="chart-line"></div><span class="chart-pin">$13.65M<br/>May 30th</span></div>
        <div class="console-grid"><div><b>Winning Products</b><span>Portable blender</span><span>Smart watch</span><span>LED strip lights</span></div><div><b>Top Suppliers</b><span>Shenzhen Hub 4.9</span><span>Global Dropship 4.8</span><span>Prime Fulfill 4.7</span></div><div><b>Market Trends</b><span>Demand +24%</span><span>Competition -8%</span><span>Saturation Low</span></div></div>
      </div>
    </div>
  </div>
</section>
<section class="section taste-reference">
  <div class="container taste-reference-grid">
    <div class="reveal"><span class="section-kicker">TASTEPILOT</span><h2>Your AI Taste Companion.</h2><p>TastePilot helps users discover, compare and save food choices using recommendation logic that feels personal and simple.</p><ul class="check-list"><li>AI recommendations</li><li>Personalized collections</li><li>Smart tracking and alerts</li><li>Seamless experience</li></ul><div class="store-badges"><span>App Store</span><span>Google Play</span></div></div>
    <div class="phone-trio reveal" aria-hidden="true"><div></div><div></div><div></div></div>
  </div>
</section>
<section class="section yacht-cta">
  <div class="container future-grid reveal">
    <div><span class="section-kicker">LET'S BUILD THE FUTURE</span><h2>Ready to Scale With AI?</h2><p>Partner with SEATOP AI to unlock automation, intelligence and data-driven growth without losing the clarity customers expect.</p></div>
    <div class="get-in-touch"><h3>Get in Touch</h3><p>hello@seatop.ai</p><p>WhatsApp enquiries available</p><p>Global AI workflow projects</p><a class="btn btn-primary" href="/contact">Book a Demo <span class="btn-icon">›</span></a></div>
  </div>
</section>`,
  aiAgents: `
<section class="section ocean-band">
  <div class="container">
    <div class="section-head reveal"><div><span class="section-kicker">AUTOMATION WORKFLOW</span><h2>Discover. Build. Automate. Optimize.</h2><p>SEATOP AI turns business process knowledge into practical agents that can support customers, qualify enquiries and simplify daily operations.</p></div></div>
    <div class="timeline-grid reveal">
      <article><span>01</span><h3>Discover</h3><p>Map customer questions, handoffs, data sources and the moments where your team loses time.</p></article>
      <article><span>02</span><h3>Build</h3><p>Shape agent instructions, knowledge, escalation rules and a clear user experience.</p></article>
      <article><span>03</span><h3>Automate</h3><p>Deploy customer engagement, lead capture, booking support and operations workflows.</p></article>
      <article><span>04</span><h3>Optimize</h3><p>Improve answers, routing and conversion signals as real conversations reveal patterns.</p></article>
    </div>
    <div class="bento-grid agents-bento">
      <article class="bento-card large reveal"><span class="section-kicker">BUSINESS USE CASES</span><h3>Agents designed around real operating pressure.</h3><p>Customer support, sales qualification, booking requests, restaurant concierge flows, e-commerce support and internal workflow automation can all share one consistent service layer.</p><a class="btn btn-primary" href="/contact">Plan My Agent <span class="btn-icon">›</span></a></article>
      <article class="bento-card reveal"><h3>Lead Intelligence</h3><p>Capture budget, urgency, service interest and preferred contact channel before your team replies.</p></article>
      <article class="bento-card reveal"><h3>Knowledge Answers</h3><p>Keep business FAQs, menus, policies, product details and service information consistent.</p></article>
      <article class="bento-card reveal"><h3>Human Escalation</h3><p>Route conversations to people when a request needs judgement, pricing or approval.</p></article>
    </div>
  </div>
</section>`,
  aiDropshipping: `
<section class="section ocean-band">
  <div class="container">
    <div class="section-head reveal"><div><span class="section-kicker">PRODUCT INTELLIGENCE</span><h2>AI-assisted product research without unrealistic promises.</h2><p>SEATOP AI helps compare product angles, supplier readiness, margin structure and listing quality so e-commerce decisions become clearer.</p></div></div>
    <div class="scan-dashboard reveal">
      <div class="scan-header"><span>SEATOP Commerce Radar</span><b>Live product evaluation model</b></div>
      <div class="scan-visual"><span></span><span></span><span></span><span></span></div>
      <div class="scan-metrics"><div><b>Trend Detection</b><span>Signals and demand patterns</span></div><div><b>Margin Analysis</b><span>Cost, shipping and ad assumptions</span></div><div><b>Supplier Check</b><span>Practical readiness review</span></div><div><b>Content Generation</b><span>Listing hooks and product copy</span></div></div>
    </div>
    <div class="timeline-grid reveal">
      <article><span>01</span><h3>Research</h3><p>Shortlist products by category, audience, use case and selling angle.</p></article>
      <article><span>02</span><h3>Validate</h3><p>Review supplier readiness, fulfillment friction and margin assumptions.</p></article>
      <article><span>03</span><h3>Prepare</h3><p>Create product descriptions, ad hooks, FAQs and product support flows.</p></article>
      <article><span>04</span><h3>Operate</h3><p>Use AI support to answer enquiries and refine product presentation.</p></article>
    </div>
  </div>
</section>`,
  tastepilot: `
<section class="section taste-accent">
  <div class="container app-showcase">
    <div class="reveal"><span class="section-kicker">APP SHOWCASE</span><h2>TastePilot feels like a premium AI companion for food decisions.</h2><p>Warm recommendation moments sit inside the SEATOP AI ocean-tech system, giving users a clearer path from preference to meal idea.</p><div class="feature-stack"><span>Taste matching</span><span>Dining context</span><span>Restaurant engagement</span><span>Preference insights</span></div></div>
    <div class="phone-lab reveal" aria-hidden="true">
      <div class="css-phone"><div class="phone-speaker"></div><div class="match-card top"><b>Tonight's match</b><span>Local fusion · Spicy · Quick dinner</span></div><div class="taste-bars"><i></i><i></i><i></i></div><div class="match-card"><b>Why it fits</b><span>Bold flavor, nearby options and budget preference align.</span></div><div class="match-card"><b>Next action</b><span>Compare restaurants or save this food mood.</span></div></div>
    </div>
  </div>
</section>`,
  contact: `
<section class="section ocean-band">
  <div class="container contact-cta reveal">
    <span class="section-kicker">LET'S BUILD YOUR AI WORKFLOW</span>
    <h2>Start with one clear workflow, then scale into a smarter operating system.</h2>
    <p>Use email, WhatsApp or the enquiry form. SEATOP AI can discuss customer engagement agents, dropshipping intelligence, TastePilot partnerships and custom AI projects.</p>
    <div class="hero-actions"><a class="btn btn-primary" href="mailto:hello@seatop.ai">Email SEATOP AI <span class="btn-icon">›</span></a><a class="btn btn-ghost" data-whatsapp="" href="#">WhatsApp</a></div>
  </div>
</section>`,
};
