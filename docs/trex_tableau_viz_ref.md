---
title: Tableau Viz Reference
layout: docs
--- 
The programming interface for Tableau Viz consists of a method call in the Dashboard Extensions API called `createVizImageAsync`. The `createVizImageAsync` method returns an SVG image. The method takes a single argument, a JavaScript object (the `inputSpec`). The `inputSpec` describes the viz that you want to create and includes the data, or a reference to the data, and the information about how you want that data displayed.

The following sections describe the components and syntax of the `inputSpec` for Tableau Viz v1 and Tableau Viz v2. Tableau Viz v2 of the `inputSpec` adds support for combination charts, multiple panes, and dual-axis visualitations.

---

For Tableau 2021.3 and later and the Tableau Dashboard Extensions API v1.6 (and later)

* See [Tableau Viz inputSpec v1]({{site.baseurl}}/docs/trex_tableau_viz_ref_v1.html)

---

For Tableau 2022.3 (and later) and the Tableau Dashboard Extensions API v1.9 (and later)

* See [Tableau Viz inputSpec v2]({{site.baseurl}}/docs/trex_tableau_viz_ref_v2.html)

---

For information about how to add a Tableau Viz, see [Add Tableau Viz to your Dashboard Extensions]({{site.baseurl}}/docs/trex_tableau_viz.html).