<script>
  import VideoContainer from "../components/videoContainer.svelte";
</script>

<section id="APropos" class="section">
  <p class="section-title">A Propos</p>
  <h1 class="section-splash">Je crée des sites web, de la <span>conception</span> au <span>développement</span></h1>
  
  <VideoContainer num={"1"}></VideoContainer>

  <div>
    <p>Ce que je maîtrise 🎓</p>
    <ul class="list-disc pl-7">
      <li>HTML / CSS / JS </li>
      <li>React / Vue / <b>Svelte</b></li>
      <li>SCSS / Tailwind</li>
      <li>APIs : Firestore / FaunaDB</li>
      <li><b>Performance Lighthouse 4x100</b></li>
      <li>Développement <b>"serverless"</b></li>
      <li>Développement <b>"responsive"</b></li>
    </ul>
  </div>

</section>
<section id="Solutions" class="section">
  <p>Solutions</p>
</section>
<section id="Contacter" class="section">
  <p>Contacter</p>
</section>

<style lang="postcss">
  .section{
    @apply mt-8 bg-zinc-50 pt-4 shadow-lg shadow-shadowColor flex flex-col;
  }
  .section-title{
    @apply text-center italic text-slate-700;
  }
  .section-splash{
    @apply mt-2 text-xl text-center max-w-xs self-center;
  }
  .section-splash span{
    @apply font-semibold text-brandBlue;
  }
</style>

