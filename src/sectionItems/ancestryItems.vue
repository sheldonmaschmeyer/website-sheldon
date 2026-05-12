<template>
  <div>
    <!-- Introduction -->
    <div :class="classes.item">
      <div class="resume-content">
        <p class="lead">
          My sister and I are often asked where we are from. This question
          sometimes opens into a longer conversation, because the two halves of
          our heritage are quite different from one another, and together they
          produce a genetic profile that tends to confuse people. The detail
          below is my personal attempt to give that conversation a proper home,
          using my 23AndMe results. The short answer:
          <strong>I AM CANADIAN</strong>. I am originally from Quebec but, lived
          and educated mostly in Ontario. My father and grandfather are from
          Alberta. My paternal great-grandparents came from Germany and
          initially settled in the United States before migrating further north
          to become founding settlers of Bruderheim, Alberta. My mother is a
          naturalized Canadian citizen, originally from India. Most of my
          education took place in Ontario. I only speak, write, and think in
          English. I use Duolingo to dabble in French and German, more French
          than German, but I am not bilingual or multilingual, an Anglophone.
          However, I translate the Alpha-El app into French, with attention to
          details, as best I can, with the assistance of translation tools. This
          is to be in compliance and respectful of Canadian bilingual
          requirements. I am proud of my diverse heritage, and inspired by the
          accomplishments of my ancestors, on both sides of my family.
        </p>
        <p>
          <em
            >"We will add your biological and technological distinctiveness to
            our own. Your culture will adapt to service us. Resistance is
            futile." - Star Trek: First Contact</em
          >
        </p>
      </div>
    </div>

    <!-- Father's Side -->
    <div :class="classes.item">
      <div class="resume-content">
        <h3 class="mb-0">
          Father's Side: German
          <span class="text-primary fs-6 fw-normal">European · 48.7%</span>
        </h3>
        <div class="subheading mb-3">
          Northwestern Germany &amp; the Rhineland
        </div>
        <p>
          My father's family is of German descent, with roots concentrated in
          northwestern Germany. 23andMe confirms two strong Genetic Group
          matches:
          <strong>Northwestern German Plain</strong> and
          <strong>Westphalian Lowlands</strong> (both rated
          <em>Very Close</em>), with country matches to
          <strong>Germany's western and northwestern states</strong>.
        </p>
        <p>
          The Maschmeyer name itself is traceable to the Lower Saxony /
          Westphalia region. Maschmeyer, translated as "Mayer of the marshland";
          see Maschmeyer's Mühle historic site located in the Teutoburg Forest.
          A 23andMe diaspora signal,
          <em>Lower Missouri River Basin Early German Americans</em> (Very
          Close), reflects the large 19th-century wave of German emigrants who
          settled the American Midwest before some branches continued north into
          Canada.
        </p>
        <p>
          My grandmother on my father's side was an Austrian orphan. This aligns
          with the broader German and Central European heritage.
        </p>
        <div class="row mt-3">
          <div class="col-md-6">
            <strong>Top Genetic Groups (Father's Side)</strong>
            <div class="mt-2">
              <div class="d-flex justify-content-between">
                <span>Dutch &amp; Northern German</span
                ><strong class="ms-3 text-nowrap">16.8%</strong>
              </div>
              <div class="d-flex justify-content-between">
                <span>Belgian, Rhinelander &amp; Southern Dutch</span
                ><strong class="ms-3 text-nowrap">17.2%</strong>
              </div>
              <div class="d-flex justify-content-between">
                <span>French</span
                ><strong class="ms-3 text-nowrap">9.0%</strong>
              </div>
              <div class="d-flex justify-content-between">
                <span>English</span
                ><strong class="ms-3 text-nowrap">5.7%</strong>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <strong>Country / Region Matches</strong>
            <ul class="mt-2">
              <li>Germany (western states): Country Match</li>
              <li>Germany (northwestern states): Country Match</li>
              <li>Northwestern German Plain: Very Close</li>
              <li>Westphalian Lowlands: Very Close</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Mother's Side -->
    <div :class="classes.item">
      <div class="resume-content">
        <h3 class="mb-0">
          Mother's Side: Parsi (Zoroastrian)
          <span class="text-primary fs-6 fw-normal"
            >Western Asian &amp; North African · 38.0% &nbsp;|&nbsp; Central
            &amp; South Asian · 13.3%</span
          >
        </h3>
        <div class="subheading mb-3">
          Persian Origin · Settled in Bombay (Mumbai), India
        </div>
        <p>
          My mother's family are
          <strong>Parsis</strong>, members of the Zoroastrian community that
          emigrated from Persia (present-day Iran) to the Indian subcontinent,
          primarily settling around Bombay (now Mumbai) roughly 1,000 to 1,300
          years ago. The Parsi community is one of the smallest and most
          genetically distinct ethno-religious groups in the world.
        </p>
        <p>
          23andMe identifies <strong>Parsis in Western India</strong> as a
          <em>Very Close</em> Genetic Group match and places a Country Match on
          <strong>India (northern regions)</strong>. The large
          <em>Iranian, Caucasian &amp; Mesopotamian</em> component (~37.5%) is
          the genetic signature of the original Persian homeland. Parsis carry
          this ancestry intact because the community historically married within
          itself, preserving a genetic profile closer to ancient Iran than to
          the surrounding South Asian population.
        </p>
        <div class="row mt-3">
          <div class="col-md-6">
            <strong>Top Genetic Groups (Mother's Side)</strong>
            <div class="mt-2">
              <div class="d-flex justify-content-between">
                <span>Iranian, Caucasian &amp; Mesopotamian</span
                ><strong class="ms-3 text-nowrap">37.5%</strong>
              </div>
              <div class="d-flex justify-content-between">
                <span>Northern Indian &amp; Pakistani</span
                ><strong class="ms-3 text-nowrap">12.0%</strong>
              </div>
              <div class="d-flex justify-content-between">
                <span>Southern Indian &amp; Sri Lankan</span
                ><strong class="ms-3 text-nowrap">1.3%</strong>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <strong>Country / Region Matches</strong>
            <ul class="mt-2">
              <li>Parsis in Western India: Very Close</li>
              <li>India (northern regions): Country Match</li>
              <li>India (southern regions): Country Match</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 23andMe Summary -->
    <div :class="classes.item">
      <div class="resume-content">
        <h3 class="mb-0">23andMe Ancestry Composition Summary</h3>
        <div class="subheading mb-3">Full breakdown · Updated May 2026</div>
        <div class="row">
          <div class="col-md-4 mb-3">
            <strong>European</strong>
            <div class="mt-2" style="min-width: 350px">
              <div class="d-flex justify-content-between">
                <span>European (total)</span
                ><strong class="ms-3 text-nowrap">48.7%</strong>
              </div>
              <div class="d-flex justify-content-between ps-3">
                <span>Western European</span
                ><span class="ms-3 text-nowrap">43.0%</span>
              </div>
              <div class="d-flex justify-content-between ps-3">
                <span>British &amp; Irish</span
                ><span class="ms-3 text-nowrap">5.7%</span>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <strong>Western Asian &amp; North African</strong>
            <div class="mt-2" style="min-width: 350px">
              <div class="d-flex justify-content-between">
                <span>Total</span
                ><strong class="ms-3 text-nowrap">38.0%</strong>
              </div>
              <div class="d-flex justify-content-between ps-3">
                <span>Iranian, Caucasian &amp; Mesopotamian</span
                ><span class="ms-3 text-nowrap">37.5%</span>
              </div>
              <div class="d-flex justify-content-between ps-3">
                <span>Arab, Egyptian &amp; Levantine</span
                ><span class="ms-3 text-nowrap">0.5%</span>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <strong>Central &amp; South Asian</strong>
            <div class="mt-2" style="min-width: 350px">
              <div class="d-flex justify-content-between">
                <span>Total</span
                ><strong class="ms-3 text-nowrap">13.3%</strong>
              </div>
              <div class="d-flex justify-content-between ps-3">
                <span style="white-space: nowrap"
                  >Northern Indian &amp; Pakistani</span
                ><span class="ms-3 text-nowrap">12.0%</span>
              </div>
              <div class="d-flex justify-content-between ps-3">
                <span style="white-space: nowrap"
                  >Southern Indian &amp; Sri Lankan</span
                ><span class="ms-3 text-nowrap">1.3%</span>
              </div>
            </div>
          </div>
        </div>
        <p class="mt-3 mb-0">
          <a
            href="https://you.23andme.com/published/reports/e670fc51bbde41be9e6a9fa9c165bc9d/?share_id=dc6b9b5f1627447e"
            target="_blank"
            rel="noopener noreferrer"
            >View full 23andMe report ↗</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { classes } from '../definitions/props';

export default {
  name: 'AncestryItems',
  props: {
    classes: classes,
  },
};
</script>
