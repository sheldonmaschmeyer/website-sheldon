<template>
  <div>
    <!-- Introduction -->
    <div :class="classes.item">
      <div class="resume-content">
        <p class="lead">
          <i18n-t keypath="ancestry.intro" tag="span">
            <template #bold>
              <strong>{{ $t('ancestry.introCanadian') }}</strong>
            </template>
          </i18n-t>
        </p>
        <p>
          <em>
            {{ $t('ancestry.starTrekQuote') }}
            <br />
            {{ $t('ancestry.starTrekQuoteAttribution') }}
          </em>
        </p>
      </div>
    </div>

    <!-- Father's Side -->
    <div :class="classes.item">
      <div class="resume-content">
        <h3 class="mb-0">
          {{ $t('ancestry.germanAncestry') }}
          <span class="text-primary fs-6 fw-normal">
            {{ $t('ancestry.european') }} · {{ $n(0.487, 'percent') }}
          </span>
        </h3>
        <div class="subheading mb-3">{{ $t('ancestry.germanLocation') }}</div>

        <i18n-t keypath="ancestry.germanDesc1" tag="p">
          <template #g1>
            <strong>{{ $t('ancestry.germanDesc1G1') }}</strong>
          </template>
          <template #g2>
            <strong>{{ $t('ancestry.germanDesc1G2') }}</strong>
          </template>
          <template #rating>
            <em>{{ $t('ancestry.germanDesc1Rating') }}</em>
          </template>
          <template #country>
            <strong>{{ $t('ancestry.germanDesc1Country') }}</strong>
          </template>
        </i18n-t>

        <i18n-t keypath="ancestry.germanDesc2" tag="p">
          <template #diaspora>
            <em>{{ $t('ancestry.germanDesc2Diaspora') }}</em>
          </template>
        </i18n-t>

        <p>{{ $t('ancestry.germanDesc3') }}</p>

        <div class="row mt-3">
          <div class="col-md-6">
            <strong>{{ $t('ancestry.topGeneticGroupsFather') }}</strong>
            <div class="mt-2">
              <div class="d-flex justify-content-between">
                <span>{{ $t('ancestry.dutchNorthernGerman') }}</span>
                <strong class="ms-3 text-nowrap">
                  {{ $n(0.168, 'percent') }}
                </strong>
              </div>
              <div class="d-flex justify-content-between">
                <span>{{ $t('ancestry.belgianRhinelander') }}</span>
                <strong class="ms-3 text-nowrap">
                  {{ $n(0.172, 'percent') }}
                </strong>
              </div>
              <div class="d-flex justify-content-between">
                <span>{{ $t('ancestry.french') }}</span>
                <strong class="ms-3 text-nowrap">
                  {{ $n(0.09, 'percent') }}
                </strong>
              </div>
              <div class="d-flex justify-content-between">
                <span>{{ $t('ancestry.english') }}</span>
                <strong class="ms-3 text-nowrap">
                  {{ $n(0.057, 'percent') }}
                </strong>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <strong>{{ $t('ancestry.countryRegionMatches') }}</strong>
            <ul class="mt-2">
              <li>{{ $t('ancestry.germanyWestern') }}</li>
              <li>{{ $t('ancestry.germanyNorthwestern') }}</li>
              <li>{{ $t('ancestry.nwGermanPlain') }}</li>
              <li>{{ $t('ancestry.westphalianLowlands') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Mother's Side -->
    <div :class="classes.item">
      <div class="resume-content">
        <h3 class="mb-0">
          {{ $t('ancestry.parsiAncestry') }}
          <span class="text-primary fs-6 fw-normal">
            {{ $t('ancestry.parsiWesternAsianNorthAfrican') }} ·
            {{ $n(0.38, 'percent') }} |
            {{ $t('ancestry.parsiCentralSouthAsian') }} ·
            {{ $n(0.133, 'percent') }}
          </span>
        </h3>
        <div class="subheading mb-3">{{ $t('ancestry.parsiOrigin') }}</div>

        <i18n-t keypath="ancestry.parsiDesc1" tag="p">
          <template #parsi>
            <strong>{{ $t('ancestry.parsiDesc1Term') }}</strong>
          </template>
        </i18n-t>

        <i18n-t keypath="ancestry.parsiDesc2" tag="p">
          <template #group>
            <strong>{{ $t('ancestry.parsiDesc2Group') }}</strong>
          </template>
          <template #rating>
            <em>{{ $t('ancestry.parsiDesc2Rating') }}</em>
          </template>
          <template #country>
            <strong>{{ $t('ancestry.parsiDesc2Country') }}</strong>
          </template>
          <template #comp>
            <em>{{ $t('ancestry.parsiDesc2Comp') }}</em>
          </template>
        </i18n-t>

        <div class="row mt-3">
          <div class="col-md-6">
            <strong>{{ $t('ancestry.topGeneticGroupsMother') }}</strong>
            <div class="mt-2">
              <div class="d-flex justify-content-between">
                <span>{{ $t('ancestry.iranianCaucasian') }}</span>
                <strong class="ms-3 text-nowrap">
                  {{ $n(0.375, 'percent') }}
                </strong>
              </div>
              <div class="d-flex justify-content-between">
                <span>{{ $t('ancestry.northernIndian') }}</span>
                <strong class="ms-3 text-nowrap">
                  {{ $n(0.12, 'percent') }}
                </strong>
              </div>
              <div class="d-flex justify-content-between">
                <span>{{ $t('ancestry.southernIndian') }}</span>
                <strong class="ms-3 text-nowrap">
                  {{ $n(0.013, 'percent') }}
                </strong>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <strong>{{ $t('ancestry.countryRegionMatches') }}</strong>
            <ul class="mt-2">
              <li>{{ $t('ancestry.parsiWesternIndia') }}</li>
              <li>{{ $t('ancestry.indiaNorthern') }}</li>
              <li>{{ $t('ancestry.indiaSouthern') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 23andMe Summary -->
    <div :class="classes.item">
      <div class="resume-content">
        <h3 class="mb-0">{{ $t('ancestry.23AndMeSummaryHeading') }}</h3>
        <div class="subheading mb-3">
          {{ $t('ancestry.23AndMeFullBreakdownHeading') }}
        </div>
        <div class="row">
          <div class="col-md-4 mb-3">
            <strong>{{ $t('ancestry.european') }}</strong>
            <div class="mt-2">
              <div class="d-flex justify-content-between">
                <span>{{ $t('ancestry.europeanTotal') }}</span>
                <strong class="text-nowrap text-end">
                  {{ $n(0.487, 'percent') }}
                </strong>
              </div>
              <div class="d-flex justify-content-between">
                <span class="ps-3">{{ $t('ancestry.westernEuropean') }}</span>
                <span class="text-nowrap text-end">{{ $n(0.43, 'percent') }}</span>
              </div>
              <div class="d-flex justify-content-between">
                <span class="ps-3">{{ $t('ancestry.britishIrish') }}</span>
                <span class="text-nowrap text-end">{{ $n(0.057, 'percent') }}</span>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <strong>{{ $t('ancestry.westernAsianNorthAfrican') }}</strong>
            <div class="mt-2">
              <div class="d-flex justify-content-between">
                <span>{{ $t('ancestry.total') }}</span>
                <strong class="text-nowrap text-end">
                  {{ $n(0.38, 'percent') }}
                </strong>
              </div>
              <div class="d-flex justify-content-between">
                <span class="ps-3">{{ $t('ancestry.iranianCaucasian') }}</span>
                <span class="text-nowrap text-end">{{ $n(0.375, 'percent') }}</span>
              </div>
              <div class="d-flex justify-content-between">
                <span class="ps-3">{{ $t('ancestry.arabEgyptian') }}</span>
                <span class="text-nowrap text-end">{{ $n(0.005, 'percent') }}</span>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <strong>{{ $t('ancestry.centralSouthAsian') }}</strong>
            <div class="mt-2">
              <div class="d-flex justify-content-between">
                <span>{{ $t('ancestry.total') }}</span>
                <strong class="text-nowrap text-end">
                  {{ $n(0.133, 'percent') }}
                </strong>
              </div>
              <div class="d-flex justify-content-between">
                <span class="ps-3 text-break">
                  {{ $t('ancestry.northernIndian') }}
                </span>
                <span class="text-nowrap text-end ms-2">{{ $n(0.12, 'percent') }}</span>
              </div>
              <div class="d-flex justify-content-between">
                <span class="ps-3 text-break">
                  {{ $t('ancestry.southernIndian') }}
                </span>
                <span class="text-nowrap text-end ms-2">{{ $n(0.013, 'percent') }}</span>
              </div>
            </div>
          </div>
        </div>
        <p class="mt-3 mb-0">
          <a
            href="https://you.23andme.com/published/reports/e670fc51bbde41be9e6a9fa9c165bc9d/?share_id=dc6b9b5f1627447e"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ $t('ancestry.viewFullReport') }}
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { classes } from '../definitions/props';
export default {
  name: 'AncestryItems',
  props: { classes: classes },
};
</script>
