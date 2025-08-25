// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="Manifesto.html"><strong aria-hidden="true">1.</strong> ML/AI Ops Engineering Development</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="1.html"><strong aria-hidden="true">1.1.</strong> Phase 1</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="nested/001.html"><strong aria-hidden="true">1.1.1.</strong> Module 1</a></li><li class="chapter-item expanded "><a href="nested/002.html"><strong aria-hidden="true">1.1.2.</strong> Module 2</a></li><li class="chapter-item expanded "><a href="nested/003.html"><strong aria-hidden="true">1.1.3.</strong> Module 3</a></li><li class="chapter-item expanded "><a href="nested/004.html"><strong aria-hidden="true">1.1.4.</strong> Module 4</a></li><li class="chapter-item expanded "><a href="nested/005.html"><strong aria-hidden="true">1.1.5.</strong> Module 5</a></li><li class="chapter-item expanded "><a href="nested/006.html"><strong aria-hidden="true">1.1.6.</strong> Module 6</a></li><li class="chapter-item expanded "><a href="nested/007.html"><strong aria-hidden="true">1.1.7.</strong> Module 7</a></li><li class="chapter-item expanded "><a href="nested/008.html"><strong aria-hidden="true">1.1.8.</strong> Module 8</a></li><li class="chapter-item expanded "><a href="nested/009.html"><strong aria-hidden="true">1.1.9.</strong> Module 9</a></li><li class="chapter-item expanded "><a href="nested/010.html"><strong aria-hidden="true">1.1.10.</strong> Module 10</a></li><li class="chapter-item expanded "><a href="nested/011.html"><strong aria-hidden="true">1.1.11.</strong> Module 11</a></li><li class="chapter-item expanded "><a href="nested/012.html"><strong aria-hidden="true">1.1.12.</strong> Module 12</a></li><li class="chapter-item expanded "><a href="nested/013.html"><strong aria-hidden="true">1.1.13.</strong> Module 13</a></li><li class="chapter-item expanded "><a href="nested/014.html"><strong aria-hidden="true">1.1.14.</strong> Module 14</a></li><li class="chapter-item expanded "><a href="nested/015.html"><strong aria-hidden="true">1.1.15.</strong> Module 15</a></li><li class="chapter-item expanded "><a href="nested/016.html"><strong aria-hidden="true">1.1.16.</strong> Module 16</a></li><li class="chapter-item expanded "><a href="nested/017.html"><strong aria-hidden="true">1.1.17.</strong> Module 17</a></li><li class="chapter-item expanded "><a href="nested/018.html"><strong aria-hidden="true">1.1.18.</strong> Module 18</a></li><li class="chapter-item expanded "><a href="nested/019.html"><strong aria-hidden="true">1.1.19.</strong> Module 19</a></li><li class="chapter-item expanded "><a href="nested/020.html"><strong aria-hidden="true">1.1.20.</strong> Module 20</a></li><li class="chapter-item expanded "><a href="nested/021.html"><strong aria-hidden="true">1.1.21.</strong> Module 21</a></li><li class="chapter-item expanded "><a href="nested/022.html"><strong aria-hidden="true">1.1.22.</strong> Module 22</a></li><li class="chapter-item expanded "><a href="nested/023.html"><strong aria-hidden="true">1.1.23.</strong> Module 23</a></li><li class="chapter-item expanded "><a href="nested/024.html"><strong aria-hidden="true">1.1.24.</strong> Module 24</a></li><li class="chapter-item expanded "><a href="nested/025.html"><strong aria-hidden="true">1.1.25.</strong> Module 25</a></li></ol></li><li class="chapter-item expanded "><a href="2.html"><strong aria-hidden="true">1.2.</strong> Phase 2</a></li><li class="chapter-item expanded "><a href="3.html"><strong aria-hidden="true">1.3.</strong> Phase 3</a></li><li class="chapter-item expanded "><a href="4.html"><strong aria-hidden="true">1.4.</strong> Phase 4</a></li></ol></li><li class="chapter-item expanded "><a href="DELIVERABLES.html"><strong aria-hidden="true">2.</strong> Deliverables</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="PIPELINE.html"><strong aria-hidden="true">2.1.</strong> Pipeline</a></li><li class="chapter-item expanded "><a href="RESEARCH_DASHBOARD.html"><strong aria-hidden="true">2.2.</strong> Research Dashboard</a></li><li class="chapter-item expanded "><a href="nested/METHODOLOGY.html"><strong aria-hidden="true">2.3.</strong> Methodology</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="1.Projects/Template.html"><strong aria-hidden="true">2.3.1.</strong> Projects</a></li><li class="chapter-item expanded "><a href="2.Areas/Template.html"><strong aria-hidden="true">2.3.2.</strong> Areas</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="2.Areas/00FoundationModelTopics.html"><strong aria-hidden="true">2.3.2.1.</strong> Foundation Model Topics</a></li></ol></li><li class="chapter-item expanded "><a href="3.Resources/Template.html"><strong aria-hidden="true">2.3.3.</strong> Resources</a></li><li class="chapter-item expanded "><a href="4.Archives/Template.html"><strong aria-hidden="true">2.3.4.</strong> Archives</a></li></ol></li><li class="chapter-item expanded "><a href="nested/ROADMAP.html"><strong aria-hidden="true">2.4.</strong> Roadmap</a></li><li class="chapter-item expanded "><a href="References.html"><strong aria-hidden="true">2.5.</strong> References</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="nested/nested/001_1.html"><strong aria-hidden="true">2.5.1.</strong> Resource Management Methodologies In Personal Knowledge Engineering</a></li><li class="chapter-item expanded "><a href="nested/nested/001_2.html"><strong aria-hidden="true">2.5.2.</strong> Note Capturing Systems In Personal Knowledge Management</a></li></ol></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
