import{St as e,U as t,V as n,lt as r,st as i}from"../chunks/CTQslkcF.js";import"../chunks/DHrZRVyy.js";import{t as a}from"../chunks/CXv1Cdz5.js";import{t as o}from"../chunks/DMTOtjcq.js";var s=t(`<!> <h3 class="mt-8 mb-2 text-xl">Install</h3> <!> <h3 class="mb-2 text-xl">Import papiercss</h3> <p class="mb-2"><code>@source</code> is relative to the CSS file. This scans the installed package
  so Tailwind generates the utility classes used inside the components.</p> <!> <h3 class="mt-8 mb-2 text-xl">Usage</h3> <!> <h3 class="mt-8 mb-2 text-xl">Override CSS variables</h3> <p>PapierCSS tokens can be set per component with CSS custom properties as
  attributes. Values apply to that instance (and its children).</p> <p>The full list of variables per component can be found in the <a class="link-paper" href="https://oli8.github.io/papiercss/#/components" target="_blank" rel="noreferrer">PapierCSS docs</a>.</p> <!> <p>For regular theming, see <a class="link-paper" href="https://oli8.github.io/papiercss/#/guide/theming" target="_blank" rel="noreferrer">Theming</a>.</p>`,1);function c(t){var c=s(),l=i(c);o(l,{name:`Start`,legend:`How to install and use Spaper`});var u=r(l,4);a(u,{code:`npm i spaper papiercss tailwindcss`,lang:`bash`});var d=r(u,6);a(d,{code:`@import "papiercss/fonts.css"; /* optional */
@import "tailwindcss";
@import "papiercss";
@source "../node_modules/spaper";`,lang:`css`});var f=r(d,4);a(f,{code:`<script>
  import { Button } from 'spaper';
<\/script>

<Button>Click me</Button>`});var p=r(f,8);a(p,{code:`<Spinner --paper-spinner-duration="2s" />
<Hero --paper-hero-margin-bottom="0" />`,copy:!1,class:`my-4`}),e(2),n(t,c)}export{c as component};