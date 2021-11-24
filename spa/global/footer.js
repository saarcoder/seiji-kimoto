/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_element,
	claim_space,
	claim_text,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	space,
	text
} from "svelte/internal";

function create_fragment(ctx) {
	let footer;
	let div9;
	let div7;
	let div1;
	let div0;
	let t0;
	let t1;
	let ul0;
	let li0;
	let a0;
	let t2;
	let t3;
	let li1;
	let a1;
	let t4;
	let t5;
	let li2;
	let a2;
	let t6;
	let t7;
	let div3;
	let div2;
	let t8;
	let t9;
	let ul1;
	let li3;
	let a3;
	let t10;
	let t11;
	let li4;
	let a4;
	let t12;
	let t13;
	let li5;
	let a5;
	let t14;
	let t15;
	let div5;
	let div4;
	let t16;
	let t17;
	let ul2;
	let li6;
	let a6;
	let t18;
	let t19;
	let li7;
	let a7;
	let t20;
	let t21;
	let li8;
	let a8;
	let t22;
	let t23;
	let div6;
	let a9;
	let img;
	let img_src_value;
	let t24;
	let p;
	let t25;
	let t26;
	let ul3;
	let li9;
	let a10;
	let i0;
	let t27;
	let li10;
	let a11;
	let i1;
	let t28;
	let div8;
	let small;
	let t29;
	let a12;
	let t30;
	let t31;
	let a13;
	let t32;

	return {
		c() {
			footer = element("footer");
			div9 = element("div");
			div7 = element("div");
			div1 = element("div");
			div0 = element("div");
			t0 = text("Company");
			t1 = space();
			ul0 = element("ul");
			li0 = element("li");
			a0 = element("a");
			t2 = text("About Us");
			t3 = space();
			li1 = element("li");
			a1 = element("a");
			t4 = text("Pricing");
			t5 = space();
			li2 = element("li");
			a2 = element("a");
			t6 = text("Quick Start");
			t7 = space();
			div3 = element("div");
			div2 = element("div");
			t8 = text("Product");
			t9 = space();
			ul1 = element("ul");
			li3 = element("li");
			a3 = element("a");
			t10 = text("Features");
			t11 = space();
			li4 = element("li");
			a4 = element("a");
			t12 = text("Platform");
			t13 = space();
			li5 = element("li");
			a5 = element("a");
			t14 = text("Pricing");
			t15 = space();
			div5 = element("div");
			div4 = element("div");
			t16 = text("Support");
			t17 = space();
			ul2 = element("ul");
			li6 = element("li");
			a6 = element("a");
			t18 = text("FAQ");
			t19 = space();
			li7 = element("li");
			a7 = element("a");
			t20 = text("Privacy Policy");
			t21 = space();
			li8 = element("li");
			a8 = element("a");
			t22 = text("Terms & Conditions");
			t23 = space();
			div6 = element("div");
			a9 = element("a");
			img = element("img");
			t24 = space();
			p = element("p");
			t25 = text("Lorem ipsum dolor sit amet, consectetur elit. Consjat tristique eget\n          amet, tempus eu at cttur.");
			t26 = space();
			ul3 = element("ul");
			li9 = element("li");
			a10 = element("a");
			i0 = element("i");
			t27 = space();
			li10 = element("li");
			a11 = element("a");
			i1 = element("i");
			t28 = space();
			div8 = element("div");
			small = element("small");
			t29 = text("Designed By ");
			a12 = element("a");
			t30 = text("Themefisher");
			t31 = text("\n        Developed By ");
			a13 = element("a");
			t32 = text("Jantcu");
			this.h();
		},
		l(nodes) {
			footer = claim_element(nodes, "FOOTER", { class: true });
			var footer_nodes = children(footer);
			div9 = claim_element(footer_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			div7 = claim_element(div9_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			div1 = claim_element(div7_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t0 = claim_text(div0_nodes, "Company");
			div0_nodes.forEach(detach);
			t1 = claim_space(div1_nodes);
			ul0 = claim_element(div1_nodes, "UL", { class: true });
			var ul0_nodes = children(ul0);
			li0 = claim_element(ul0_nodes, "LI", {});
			var li0_nodes = children(li0);
			a0 = claim_element(li0_nodes, "A", { href: true, class: true });
			var a0_nodes = children(a0);
			t2 = claim_text(a0_nodes, "About Us");
			a0_nodes.forEach(detach);
			li0_nodes.forEach(detach);
			t3 = claim_space(ul0_nodes);
			li1 = claim_element(ul0_nodes, "LI", {});
			var li1_nodes = children(li1);
			a1 = claim_element(li1_nodes, "A", { href: true, class: true });
			var a1_nodes = children(a1);
			t4 = claim_text(a1_nodes, "Pricing");
			a1_nodes.forEach(detach);
			li1_nodes.forEach(detach);
			t5 = claim_space(ul0_nodes);
			li2 = claim_element(ul0_nodes, "LI", {});
			var li2_nodes = children(li2);
			a2 = claim_element(li2_nodes, "A", { href: true, class: true });
			var a2_nodes = children(a2);
			t6 = claim_text(a2_nodes, "Quick Start");
			a2_nodes.forEach(detach);
			li2_nodes.forEach(detach);
			ul0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t7 = claim_space(div7_nodes);
			div3 = claim_element(div7_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			t8 = claim_text(div2_nodes, "Product");
			div2_nodes.forEach(detach);
			t9 = claim_space(div3_nodes);
			ul1 = claim_element(div3_nodes, "UL", { class: true });
			var ul1_nodes = children(ul1);
			li3 = claim_element(ul1_nodes, "LI", {});
			var li3_nodes = children(li3);
			a3 = claim_element(li3_nodes, "A", { href: true, class: true });
			var a3_nodes = children(a3);
			t10 = claim_text(a3_nodes, "Features");
			a3_nodes.forEach(detach);
			li3_nodes.forEach(detach);
			t11 = claim_space(ul1_nodes);
			li4 = claim_element(ul1_nodes, "LI", {});
			var li4_nodes = children(li4);
			a4 = claim_element(li4_nodes, "A", { href: true, class: true });
			var a4_nodes = children(a4);
			t12 = claim_text(a4_nodes, "Platform");
			a4_nodes.forEach(detach);
			li4_nodes.forEach(detach);
			t13 = claim_space(ul1_nodes);
			li5 = claim_element(ul1_nodes, "LI", {});
			var li5_nodes = children(li5);
			a5 = claim_element(li5_nodes, "A", { href: true, class: true });
			var a5_nodes = children(a5);
			t14 = claim_text(a5_nodes, "Pricing");
			a5_nodes.forEach(detach);
			li5_nodes.forEach(detach);
			ul1_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t15 = claim_space(div7_nodes);
			div5 = claim_element(div7_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			t16 = claim_text(div4_nodes, "Support");
			div4_nodes.forEach(detach);
			t17 = claim_space(div5_nodes);
			ul2 = claim_element(div5_nodes, "UL", { class: true });
			var ul2_nodes = children(ul2);
			li6 = claim_element(ul2_nodes, "LI", {});
			var li6_nodes = children(li6);
			a6 = claim_element(li6_nodes, "A", { href: true, class: true });
			var a6_nodes = children(a6);
			t18 = claim_text(a6_nodes, "FAQ");
			a6_nodes.forEach(detach);
			li6_nodes.forEach(detach);
			t19 = claim_space(ul2_nodes);
			li7 = claim_element(ul2_nodes, "LI", {});
			var li7_nodes = children(li7);
			a7 = claim_element(li7_nodes, "A", { href: true, class: true });
			var a7_nodes = children(a7);
			t20 = claim_text(a7_nodes, "Privacy Policy");
			a7_nodes.forEach(detach);
			li7_nodes.forEach(detach);
			t21 = claim_space(ul2_nodes);
			li8 = claim_element(ul2_nodes, "LI", {});
			var li8_nodes = children(li8);
			a8 = claim_element(li8_nodes, "A", { href: true, class: true });
			var a8_nodes = children(a8);
			t22 = claim_text(a8_nodes, "Terms & Conditions");
			a8_nodes.forEach(detach);
			li8_nodes.forEach(detach);
			ul2_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			t23 = claim_space(div7_nodes);
			div6 = claim_element(div7_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			a9 = claim_element(div6_nodes, "A", { class: true, href: true });
			var a9_nodes = children(a9);

			img = claim_element(a9_nodes, "IMG", {
				width: true,
				class: true,
				src: true,
				alt: true
			});

			a9_nodes.forEach(detach);
			t24 = claim_space(div6_nodes);
			p = claim_element(div6_nodes, "P", { class: true });
			var p_nodes = children(p);
			t25 = claim_text(p_nodes, "Lorem ipsum dolor sit amet, consectetur elit. Consjat tristique eget\n          amet, tempus eu at cttur.");
			p_nodes.forEach(detach);
			t26 = claim_space(div6_nodes);
			ul3 = claim_element(div6_nodes, "UL", { class: true });
			var ul3_nodes = children(ul3);
			li9 = claim_element(ul3_nodes, "LI", { class: true });
			var li9_nodes = children(li9);
			a10 = claim_element(li9_nodes, "A", { href: true, "aria-label": true });
			var a10_nodes = children(a10);
			i0 = claim_element(a10_nodes, "I", { class: true });
			children(i0).forEach(detach);
			a10_nodes.forEach(detach);
			li9_nodes.forEach(detach);
			t27 = claim_space(ul3_nodes);
			li10 = claim_element(ul3_nodes, "LI", { class: true });
			var li10_nodes = children(li10);
			a11 = claim_element(li10_nodes, "A", { href: true, "aria-label": true });
			var a11_nodes = children(a11);
			i1 = claim_element(a11_nodes, "I", { class: true });
			children(i1).forEach(detach);
			a11_nodes.forEach(detach);
			li10_nodes.forEach(detach);
			ul3_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			t28 = claim_space(div9_nodes);
			div8 = claim_element(div9_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			small = claim_element(div8_nodes, "SMALL", { class: true });
			var small_nodes = children(small);
			t29 = claim_text(small_nodes, "Designed By ");
			a12 = claim_element(small_nodes, "A", { href: true, class: true });
			var a12_nodes = children(a12);
			t30 = claim_text(a12_nodes, "Themefisher");
			a12_nodes.forEach(detach);
			t31 = claim_text(small_nodes, "\n        Developed By ");
			a13 = claim_element(small_nodes, "A", { href: true, class: true });
			var a13_nodes = children(a13);
			t32 = claim_text(a13_nodes, "Jantcu");
			a13_nodes.forEach(detach);
			small_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			footer_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div0, "class", "h3 mb-4");
			attr(a0, "href", ".");
			attr(a0, "class", "svelte-b4yotg");
			attr(a1, "href", "pricing");
			attr(a1, "class", "svelte-b4yotg");
			attr(a2, "href", ".");
			attr(a2, "class", "svelte-b4yotg");
			attr(ul0, "class", "list-unstyled footer-list svelte-b4yotg");
			attr(div1, "class", "col-md-3 col-sm-6 mb-5");
			attr(div2, "class", "h3 mb-4");
			attr(a3, "href", ".");
			attr(a3, "class", "svelte-b4yotg");
			attr(a4, "href", ".");
			attr(a4, "class", "svelte-b4yotg");
			attr(a5, "href", "pricing");
			attr(a5, "class", "svelte-b4yotg");
			attr(ul1, "class", "list-unstyled footer-list svelte-b4yotg");
			attr(div3, "class", "col-md-3 col-sm-6 mb-5");
			attr(div4, "class", "h3 mb-4");
			attr(a6, "href", "faq");
			attr(a6, "class", "svelte-b4yotg");
			attr(a7, "href", "privacy-policy");
			attr(a7, "class", "svelte-b4yotg");
			attr(a8, "href", "terms-conditions");
			attr(a8, "class", "svelte-b4yotg");
			attr(ul2, "class", "list-unstyled footer-list svelte-b4yotg");
			attr(div5, "class", "col-md-3 col-sm-6 mb-5");
			attr(img, "width", "200px");
			attr(img, "class", "img-fluid");
			if (img.src !== (img_src_value = "assets/logo.png")) attr(img, "src", img_src_value);
			attr(img, "alt", "Bigspring Hugo");
			attr(a9, "class", "d-block mb-3");
			attr(a9, "href", ".");
			attr(p, "class", "mb-4");
			attr(i0, "class", "ti-facebook svelte-b4yotg");
			attr(a10, "href", "https://www.facebook.com/jantcu/");
			attr(a10, "aria-label", "Facebook");
			attr(li9, "class", "list-inline-item");
			attr(i1, "class", "ti-instagram svelte-b4yotg");
			attr(a11, "href", "https://www.instagram.com/seiji_kimoto_/");
			attr(a11, "aria-label", "Instagram");
			attr(li10, "class", "list-inline-item");
			attr(ul3, "class", "list-inline social-icons svelte-b4yotg");
			attr(div6, "class", "col-md-3 col-sm-6 mb-5");
			attr(div7, "class", "row");
			attr(a12, "href", "https://themefisher.com/");
			attr(a12, "class", "svelte-b4yotg");
			attr(a13, "href", "https://jantcu.com/");
			attr(a13, "class", "svelte-b4yotg");
			attr(small, "class", "content attribution svelte-b4yotg");
			attr(div8, "class", "border-top border-default text-center py-4 mt-4");
			attr(div9, "class", "container");
			attr(footer, "class", "bg-light section pb-0");
		},
		m(target, anchor) {
			insert(target, footer, anchor);
			append(footer, div9);
			append(div9, div7);
			append(div7, div1);
			append(div1, div0);
			append(div0, t0);
			append(div1, t1);
			append(div1, ul0);
			append(ul0, li0);
			append(li0, a0);
			append(a0, t2);
			append(ul0, t3);
			append(ul0, li1);
			append(li1, a1);
			append(a1, t4);
			append(ul0, t5);
			append(ul0, li2);
			append(li2, a2);
			append(a2, t6);
			append(div7, t7);
			append(div7, div3);
			append(div3, div2);
			append(div2, t8);
			append(div3, t9);
			append(div3, ul1);
			append(ul1, li3);
			append(li3, a3);
			append(a3, t10);
			append(ul1, t11);
			append(ul1, li4);
			append(li4, a4);
			append(a4, t12);
			append(ul1, t13);
			append(ul1, li5);
			append(li5, a5);
			append(a5, t14);
			append(div7, t15);
			append(div7, div5);
			append(div5, div4);
			append(div4, t16);
			append(div5, t17);
			append(div5, ul2);
			append(ul2, li6);
			append(li6, a6);
			append(a6, t18);
			append(ul2, t19);
			append(ul2, li7);
			append(li7, a7);
			append(a7, t20);
			append(ul2, t21);
			append(ul2, li8);
			append(li8, a8);
			append(a8, t22);
			append(div7, t23);
			append(div7, div6);
			append(div6, a9);
			append(a9, img);
			append(div6, t24);
			append(div6, p);
			append(p, t25);
			append(div6, t26);
			append(div6, ul3);
			append(ul3, li9);
			append(li9, a10);
			append(a10, i0);
			append(ul3, t27);
			append(ul3, li10);
			append(li10, a11);
			append(a11, i1);
			append(div9, t28);
			append(div9, div8);
			append(div8, small);
			append(small, t29);
			append(small, a12);
			append(a12, t30);
			append(small, t31);
			append(small, a13);
			append(a13, t32);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(footer);
		}
	};
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Component;