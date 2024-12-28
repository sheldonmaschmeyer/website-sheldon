<template>
  <div :class="classes.item">
    <div class="resume-content white-space: pre-wrap;">
      <div class="subheading">2024</div>
      <div class="ps-4">
        ▪ My partner and I donate monthly to Amnesty International since July
        2024. <br />
        Amnesty International fights for "a world in which every person enjoys
        all of the human rights enshrined in the Universal Declaration of Human
        Rights and other international human rights instruments."
      </div>

      <div class="ps-4">
        ▪ Donated to UNRWA <br />
        The terrorist attack on Israel is horrific. <br />
        The organization was compromised by a few extremists who carried out, or
        facilitated, the horrible murders, rapes and kidnappings. The United
        Nations Relief and Works Agency is one of the only organizations that is
        still operating in war zones within Gaza. <br />
        They have fired the bad apples who were involved with the terrorist
        attacks on Israel and the Canadian government, after an investigation,
        actively donates to UNRWA. <br />
        War is a form of hell on earth. Innocent civilians, many children, need
        food, medicine and shelter. Since the terrorists hide and fight amongst
        civilians, using them as human shields, the task of humanitarian
        assistance is precarious.
      </div>
      <div class="ps-4">
        ▪ Donated to the Ottawa Food Bank <br />
        After moving to Downtown Ottawa, living near a Community Centre, I was
        reminded how much absolute poverty there is, in Ontario. I never give
        money to individuals on the street but, I did donate to the Ottawa Food
        Bank online. There are pockets poverty and hunger throughout Canada.
        <br />
      </div>
      <div class="ps-4">
        ▪ Donated to the Provincial Liberal Party <br />

        I believe that Bonnie Crombie will be a fantastic Premier of Ontario.
        Challenging a potential future federal Conservative government. <br />

        Fighting for universal healthcare, reducing wait times and increasing
        accessibility to family doctors. <br />
        Improved affordability of housing and rent for both the middle class
        and, low income families. <br />
        While I greatly respect the NDP and the Green Party, in Ontario, I
        believe that the Liberals, in the long-term, have the best chance to
        form a stable government that can implement important legislation and
        lasting change.
      </div>
      <div class="ps-4">
        ▪ Donated to the Canadian Legion <br />
        My partner and I donate annually to the legion, normally cash. <br />
        This year we decided to donate through the legion.ca website for two
        ceramic poppies. Due to the 2024 Canada Post strike , the ceramic
        poppies will likely arrive by mail in time for next year's Remembrance
        Day.
      </div>

      <div class="subheading pt-4">2023</div>
      <div class="ps-4">
        ▪ Donated to the Ottawa Food Bank <br />
        I donate money rather than groceries to food banks since, the charities
        are able to use the funds for the services and items that are urgently
        needed. Before university, I volunteered at the Aurora Food Pantry.
      </div>

      <div class="subheading pt-4">IMRSV</div>
      • Donated to Canadian Red Cross for:11
      <div class="ps-4">▪ COVID-19 aid in India</div>
      <div class="ps-4">▪ Canadian flood or fires</div>
      <div class="ps-4">▪ Urgent aid to Ukraine</div>
      • Donated to the Canada - Ukraine Foundation <br />
      • Donated to a food bank

      <div class="subheading pt-4">2022</div>
      <div class="ps-4">
        ▪ Donated to the Debra Dynes Family House <br />
        A multi-service community resource centre in a low-income social housing
        area. They are committed to improving the quality of life for
        multi-culturally diverse family, children and youth.
      </div>

      <div class="subheading pt-4">Carleton U</div>
      • Amnesty International Canada donations <br />
      • Note Taker: for students with disabilities (PMC centre) at Carleton
      University multiple courses and terms <br />
      • Canadian Feed the Children: General Member at Carleton University: 2012
      - 2013

      <div class="subheading pt-4">Other</div>
      • Aurora Food Pantry: volunteer at Food Bank: 2008 <br />
      • Out of the Cold program for the homeless: volunteer: 2000 - 2003 <br />
      • Terry Fox Run: occasional donor and participant <br />
      • Folding@Home: occasionally donate my unused CPU and/or GPU resources to
      the researchers
    </div>
  </div>
</template>

<script lang="ts">
import { classes } from '../definitions/props';
export default {
  name: 'VolunteerItems',
  props: {
    classes: classes,
  },
};
</script>
