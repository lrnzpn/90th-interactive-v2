<template lang="pug">
  #content-wrapper
    #main
      section(ref="animate--1")
        #search.fixed
          .search-div
            //- reveal guidon logo
            transition(name="fade" mode="out-in")
              .srch-bx.ai-flex-end.wh.t-75(v-if="getActiveSection == 3")
                .logo.center
                  .tgdn-wrapper
                    .tgdn.static

          .search-div
            .srch-bx.center.wh
              //- disappear when after displayin on laptop
              transition(name="fade" mode="out-in")
                .srch.center(v-if="getActiveSection < 5")
                  .icon-wrapper 
                    .search.static
                  //- fade animation for Guidon text
                  transition(name="fade")
                    span.ml-5p(v-if="getActiveSection >= 3") THE GUIDON Online

          .search-div 
            //- reveal writers and dev/design
            transition(name="fade" mode="out-in")
              .srch-bx.center(v-if="getActiveSection == 3")
                .cc
                  div
                    span Written by: <br> Jasey C. Cruz and Enrique B.Halili
                  div
                    span Interactive by: <br> Tria Gonzales and Miggy Pinaroc

        #laptop.fixed
          //- reveal laptop
          transition(name="fade" mode="out-in")
            .laptop.center.wh(v-if="getActiveSection == 4")
              .mac-wrapper
                .mac.static

        #laptop.fixed
          //- switch to fixed header, reveal text
          transition(name="fade" mode="out-in")
            .laptop.center.wh.fixed(v-if="getActiveSection == 5")
              .laptop-wrapper.center 
                .mac-wrapper
                  .mac-txt.static
              .laptop-txt-wrapper.center.fixed
                .laptop-txt.center
                  p.blue 
                    | FOR 90 years, The GUIDON has committed itself to providing its readers with
                    | accurate and engaging content, made accessible through newsstands across the
                    | campus. After the publication launched its online platforms in 2008, it has
                    | steadily begun to delve into the world of digital journalism. Looking towards
                    | the future, The GUIDON hopes to fully transition into an online publication by
                    | its 100th year.
        
        #newspaper.fixed
          .newspaper.center.wh
            transition(name="fade" mode="out-in")
              .news-txt.center.absolute(v-if="getActiveSection == 6")
                p.blue
                  | Currently, The GUIDON releases around 2,000 physical copies of its paper each
                  | month. While these issues are made available to readers before they are released
                  | online, much of the publication’s engagement comes from its digital platforms.
            transition(name="fade" mode="out-in")
              .news-txt.center.absolute(v-if="getActiveSection == 7")
                p.white
                  | Currently, The GUIDON releases around <b>2,000 physical copies</b> of its paper each
                  | month. While these issues are made available to readers before they are released          
                  | online, much of the publication’s engagement comes from its digital platforms.
            transition(name="fade" mode="out-in")
              .newspaper.absolute(v-if="getActiveSection == 7") 
                .newspaper-bg.center.wh
                  .layer

        #perks.fixed
          transition(name="fade" mode="out-in")
            .blu-bg.wh(v-if="getActiveSection >= 8 && getActiveSection <= 9")
              transition(name="fade" mode="out-in")
                .prks-wrapper.center.row.absolute(v-if="getActiveSection == 8")
                  .prks-txt.wh.ai-flex-start
                    span The perks of going digital
                    p
                      | According to Editor-in-Chief Alithea C. Soriano,
                      | adjusting to the demands of its audience is one of the
                      | biggest factors pushing The GUIDON to produce more
                      | online multimedia content. She also stresses the
                      | importance of moving with the times when it comes to
                      | staying relevant to the lifestyle of the readers,
                      | especially with the rising demand for easily
                      | accessible news amidst the “boom of social media”.
                  .prks-img.wh.ai-flex-end
                    .tgdn-mob.static.m-0-auto
              transition(name="fade" mode="out-in")
                .prks-wrapper.center.row.absolute(v-if="getActiveSection == 9")
                  .prks-txt.wh.ai-flex-start
                    p 
                      | "Publications in general really have to be aware of their target market, or target audience, their
                      | readers, their stakeholders. Why? Because writing your stories and the way you disseminate it, the
                      | effectiveness or the impact of that is determined by how well you know your readers’ habits."
                    span Alithea C. Soriano, Editor-in-Chief
                  .prks-img.wh.center
                    .illus.static.m-0-auto
        #shift.fixed
          .shift.center.wh
            transition(name="fade" mode="out-in")
              .shift-txt.center.col.absolute(v-if="getActiveSection == 10")
                p
                  | The GUIDON’s Social Media managers Bryce Rubi and Deana Pagtalunan can attest to the potential of shifting to a
                  | fully online platform, serving as first-hand witnesses to just how far online content can reach. As those in
                  | charge of monitoring the publication’s social media accounts, they mention the high engagement numbers that posts regarding relevant topics can garner, reaching
                  | readers beyond the campus grounds. However, they also point out the unique aspects of print releases that would be left behind if ever this shift ever did occur.
                p
                  | In all, members of The GUIDON’s Editorial Board have found that taking the leap towards the all-digital
                  | format has a lot of advantages. Yet, the monumental task is not without its drawbacks.
            transition(name="fade" mode="out-in")
              .pc-txt-intro.center.col.absolute.w-50vw(v-if="getActiveSection == 11")
                p
                  | According to our editors, these are the <b>pros and cons</b> of fully shifting
                  | The GUIDON to an online platform:
        
        #pros-cons.fixed
          .pc-wrapper.wh
            transition(name="fade" mode="out-in")
              .pros-wrapper.center.absolute.row(v-if="getActiveSection >= 12 && getActiveSection < 18")
                .pros.center.w-50vw
                  span Pros
                .pc-img.w-50vw
                  // ALL PROS
                  transition(name="fade" mode="out-in")
                    .defend.background.absolute(v-if="getActiveSection == 12")
                      .pc-txt.center.absolute
                        span Content can be released immediately
                      .pc-img-crds.absolute.jc-ai-flex-end
                        span Photo by Miguel Tarrosa
                  transition(name="fade" mode="out-in")
                    .rally.background.absolute(v-if="getActiveSection == 13")
                      .pc-txt.center.absolute
                        span Articles remain timely and avoid becoming outdated.
                      .pc-img-crds.absolute.jc-ai-flex-end
                        span Photo by Zach Garcia
                  transition(name="fade" mode="out-in")
                    .uaap.background.absolute(v-if="getActiveSection == 14")
                      .pc-txt.center.absolute
                        span Released content spreads faster.
                      .pc-img-crds.absolute.jc-ai-flex-end
                        span Photo by Zoey Ignacio
                  transition(name="fade" mode="out-in")
                    .rally2.background.absolute(v-if="getActiveSection == 15")
                      .pc-txt.center.absolute
                        span Distribution is more environmentally friendly.
                      .pc-img-crds.absolute.jc-ai-flex-end
                        span Photo by Bruce Ong
                  transition(name="fade" mode="out-in")
                    .fr.background.absolute(v-if="getActiveSection == 16")
                      .pc-txt.center.absolute
                        span More creativity and flexibility in terms of content that can be released.
                      .pc-img-crds.absolute.jc-ai-flex-end
                        span Photo by Bruce Ong
                  transition(name="fade" mode="out-in")
                    .arms.background.absolute(v-if="getActiveSection == 17")
                      .pc-txt.center.absolute
                        span Articles are more easily archieved digitally.
                      .pc-img-crds.absolute.jc-ai-flex-end
                        span Photo by Zach Garcia
            transition(name="fade" mode="out-in")
              .cons-wrapper.center.absolute.row(v-if="getActiveSection >= 18 && getActiveSection < 22")
                .cons.center.w-50vw
                  span Cons
                .pc-img.w-50vw
                  // ALL CONS 
                  transition(name="fade" mode="out-in")
                    .voice.background.absolute(v-if="getActiveSection == 18")
                      .pc-txt.center.absolute 
                        span Writers will not feel the gratification of seeing their names on printed newspapers. 
                      .pc-img-crds.absolute.jc-ai-flex-end 
                        span Photo by Regine Salumbre 
                  transition(name="fade" mode="out-in")
                    .owners.background.absolute(v-if="getActiveSection == 19")
                      .pc-txt.center.absolute 
                        span Readers lose the feeling of actually holding a newspaper in hand. 
                      .pc-img-crds.absolute.jc-ai-flex-end 
                        span Photo by Jason Mariano 
                  transition(name="fade" mode="out-in")
                    .embrace.background.absolute(v-if="getActiveSection == 20")
                      .pc-txt.center.absolute 
                        span The tradition of releasing in print is forgone.
                      .pc-img-crds.absolute.jc-ai-flex-end 
                        span Photo by Bruce Ong
                  transition(name="fade" mode="out-in")
                    .tt.background.absolute(v-if="getActiveSection == 21") 
                      .pc-txt.center.absolute
                        span Online articles are not easily accessible for those without social media.
                      .pc-img-crds.absolute.jc-ai-flex-end 
                        span Photo by Zoey Ignacio
        #future.fixed
          transition(name="fade" mode="out-in")
            .future.blu-bg.wh.center(v-if="getActiveSection >= 22 && getActiveSection < 25")
              .scrn-wrapper.center.absolute
                .scrn.static.absolute.center
                  //- text containers
                  transition(name="fade" mode="out-in")
                    .scrn-txt-wrapper.center.absolute(v-if="getActiveSection == 22")
                      .scrn-txt
                        span Into the future
                        p 
                          | While there is much excitement surrounding The GUIDON’s future as a fully online publication, Soriano notes that
                          | the transition must be gradual and well thought-out. According to her, the first step on this journey, which is
                          | currently underway, is to survey readers in order to gauge their reaction to the shift towards online content and remain sensitive to the audience’s preferences.
                        p
                          | Associate Editor Margarita C. Gonzalez says that it is vital to ensure that staffers are prepared to carry out
                          | the transition. This means that writers must be able to both conceptualize content that goes beyond the printed
                          | word and execute these concepts through collaboration with design cluster staffers.
                      
                  transition(name="fade" mode="out-in")
                    .scrn-txt-wrapper.center.absolute(v-if="getActiveSection == 23")
                      .scrn-txt
                        p 
                          | Meanwhile, Design Executive Editor Jason T. Mariano highlights the necessary
                          | innovations that need to be made to The GUIDON’s website in order to support the influx of
                          | online releases. “Being in this position in the 90th Year, we can lay out the road map to make that happen, … we do
                          | not live in a print only era, that is why it calls to a shift to online,” said Mariano.
                        p
                          | Associate Editor Margarita C. Gonzalez says that it is vital to ensure that staffers are prepared to carry out
                          | the transition. This means that writers must be able to both conceptualize content that goes beyond the printed
                          | word and execute these concepts through collaboration with design cluster staffers.
                  transition(name="fade" mode="out-in")
                    .scrn-txt-wrapper.center.absolute(v-if="getActiveSection == 24")
                      .scrn-txt
                        p 
                          | In addition to optimizing The GUIDON’s website, the Design Cluster is also looking towards developing an app which
                          | will serve as a hub for all of the publication’s content. This will make it easier for readers to access The
                          | GUIDON’s releases. From the perspective of Graphic Design Editor Carmela Masiglat, the app will help increase reader
                          | engagement due to its focus on graphics and illustrations, as well as its interactive features.
                  
                  //- menu
                  .menu.ai-flex-end.wh.absolute
                    .menu-btn.menu--1(v-bind:class="{active : getActiveSection == 22}")
                    .menu-btn.menu--2(v-bind:class="{active : getActiveSection == 23}")
                    .menu-btn.menu--3(v-bind:class="{active : getActiveSection == 24}")

                  //- display people
                  .ppl-wrapper.ai-flex-end.wh
                    transition(name="fade" mode="out-in")
                      .ppl--1.static.absolute(v-if="getActiveSection >= 22")
                    transition(name="fade" mode="out-in")
                      .ppl--2.static.absolute(v-if="getActiveSection >= 23")
                    transition(name="fade" mode="out-in")
                      .ppl--3.static.absolute(v-if="getActiveSection == 24")
        //- TODO TOMORROW PLS
        #mobile.fixed
          transition(name="fade" mode="out-in")
            .mobile-wrapper.blu-bg.wh(v-if="getActiveSection == 25")
              .mobile.ai-flex-end.absolute
                .iphone.static
                  // tgdn mobile components
                  //- .iphone-components.center.col
                  //-   .live-wrapper
                  //-     .live.static
                  //-   .article-wrapper
                  //-     .article.static
                  //-   .chat-wrapper
                  //-     .chat.static
        #final.fixed
          .final.center.wh
            transition(name="fade" mode="out-in")
              .final-wrapper.center.row.absolute(v-if="getActiveSection >=26 && getActiveSection < 28")
                .final-txt.wh.ai-flex-start.col
                  p
                    | The focus on multimedia content will also allow the publication’s Design Cluster to take on a bigger role in
                    | pitching and conceptualizing releases. According to Mariano, the Design Cluster staffs—such as Graphic Design and
                    | Photos—will be asked to pursue their own stories outside the needs of the Writing Cluster. Included in these plans is a
                    | platform for staffers to pitch their own projects in order to push for more online releases.
                  p
                    | In order to facilitate all these changes, The GUIDON plans to reduce the volume of its print issues, in terms of
                    | frequency of releases and overall number and length of articles, according to Soriano and Gonzalez. This move will
                    | allow writers, artists, and photographers to focus more on collaborative multimedia content.
                .final-img.wh.center
                  transition(name="fade" mode="out-in")
                    .final-img-wrapper.absolute(v-if="getActiveSection == 26")
                      .news-line.static.m-0-auto.w-40vw
                  transition(name="fade" mode="out-in")
                    .final-img-wrapper.absolute(v-if="getActiveSection == 27")
                      .news-digital.static.m-0-auto.w-40vw
              transition(name="fade" mode="out-in")
                .final-words-wrapper.center.col(v-if="getActiveSection == 28")
                  .final-div
                    .up-col.static
                  .final-div.center.col
                    p 
                      | Yet, amidst all the hype about The GUIDON’s digital platform, Soriano and Gonzalez both agree that there will always be a
                      | role for print releases, especially for issues that correspond to a specific theme. They believe that special releases have
                      | the potential to make more of an impact if they are planned out with a specific purpose in mind.
                    p
                      | While social media trends are ever evolving, the printed format remains reliable
                      | for its constancy. Soriano states that while online content is currently more
                      | preferred, print releases provide a “safety net” and the assurance that the publication is able
                      | to release content.
                  .final-div
                    .low-col.static



    // sections control which sections will be active
    div#animation-control
      section(ref="animate--2")
      section(ref="animate--3")
      section(ref="animate--4")
      section(ref="animate--5")
      section(ref="animate--6")
      section(ref="animate--7")
      section(ref="animate--8")
      section(ref="animate--9")
      section(ref="animate--10")
      section(ref="animate--11")
      section(ref="animate--12")
      section(ref="animate--13")
      section(ref="animate--14")
      section(ref="animate--15")
      section(ref="animate--16")
      section(ref="animate--17")
      section(ref="animate--18")
      section(ref="animate--19")
      section(ref="animate--20")
      section(ref="animate--21")
      section(ref="animate--22")
      section(ref="animate--23")
      section(ref="animate--24")
      section(ref="animate--25")
      section(ref="animate--26")
      section(ref="animate--27")
      section(ref="animate--28")
      section(ref="animate--29")

</template>


<script>
import { store } from "@/store/index.js";

export default {
  name: "Main",
  data() {
    return {
      
    };
  },
  computed: {
    getActiveSection() {
      return store.active;
    }
  },

  methods: {
    // detect active on scroll
    scroll() {
      for (
        let i = 1;
        i < document.getElementsByTagName("section").length;
        i++
      ) {
        let el = this.$refs[`animate--${i}`];
        let rect = el.getBoundingClientRect();
        console.log(`Active - ${store.active} : ${rect.top}`);
        if (rect.top > 0) {
          store.active = i;
          break;
        }
      }

      if (store.active >= 3 && store.active <= 4) {
        document.querySelector(".srch").style.width = "100%";
        document.querySelector(".srch").style.background =
          "linear-gradient(90deg, #173359 0%, #2C4396 100%)";
      } else {
        document.querySelector(".srch").removeAttribute("style");
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.scroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scroll);
  }
};
</script>

<style lang="scss" scoped>
.search-div {
  height: calc(100vh / 3);
}

#search {
  z-index: 5;
}

#perks {
  z-index: 1;
}

.srch-bx {
  .srch {
    border-radius: 10px;
    transition: 0.5s ease all;
    position: fixed;
    z-index: 5;
    background: $navy;
    width: 10vw;
    height: 8vw;
    max-height: 130px;
    max-width: 60vw;

    .search {
      height: 3.5vw;
      width: 3.5vw;
      background-image: url("../assets/img/search.png");
    }

    span {
      color: white;
      font-size: $font-size--8;
      display: inline-block;
      white-space: nowrap;
    }
  }

  .logo {
    width: 15vw;
    height: 15vw;

    .tgdn {
      background-image: url("../assets/img/02 90th Year Logo (BLUE).png");
      width: 15vw;
      height: 15vw;
    }
  }

  .cc {
    div {
      text-align: center;

      span {
        color: $navy;
        line-height: $font-size--5;
        font-size: $font-size--3;
      }
    }
  }
}

.laptop {
  .mac {
    background-image: url("../assets/img/laptop.png");
    width: 100vw;
    height: 50vw;
  }

  .mac-txt {
    background-image: url("../assets/img/search-laptop.png");
    width: 100vw;
    height: 50vw;
  }
}

.newspaper {
  .news-txt {
    z-index: 10;
  }

  .newspaper-bg {
    background-image: url("../assets/img/Newspapers.png");
  }

  .layer {
    width: 100%;
    height: 100%;
    background-color: rgba(23, 51, 89, 0.8);
  }
}

.blu-bg {
  background: $light-navy-gradient;

  .prks-wrapper {
    .prks-txt {
      color: white;
      width: 43vw;
      flex-direction: column;
      text-align: justify;
      span {
        font-weight: bold;
        font-style: italic;
        font-size: $font-size--3;
      }

      p {
        font-size: $font-size--3;
        line-height: $font-size--5;
      }
    }

    .prks-img {
      width: 43vw;
      .tgdn-mob {
        background-position: bottom;
        background-image: url("../assets/img/guidon-min.gif");
        width: 30vw;
      }

      .illus {
        background-image: url("../assets/img/Illustartion.png");
        width: 33vw;
      }
    }
  }
}

.shift {
  .shift-txt {
    text-align: justify;
    width: 86vw;

    p {
      font-size: $font-size--3;
      line-height: $font-size--5;
      color: $navy;
    }
  }

  .pc-txt-intro {
    text-align: center;
    p {
      font-size: $font-size--3;
      line-height: $font-size--5;
      color: $navy;
    }
  }
}

.pc-wrapper {
    
    .pros {
      background: $light-navy-gradient;
      span {
        color: white;
        font-size: $font-size--9 * 2; // 10vw
      }
    }

    .cons {
      background: $red-gradient;
      span {
        color: white;
        font-size: $font-size--9 * 2; // 10vw
      }
    }

    .pc-txt {
      span {
        width: 40vw;
        text-align: center;
        font-size: $font-size--4;
      }
    }

    .pc-img-crds {
      span {
        padding: 5%;
        color: $black-alpha;
        font-size:1.25vw;
      }
    }
}

.future {
  .scrn {
    background-image: url('../assets/img/Window.png');
    width: 100vw;
    height: 50vw;
  }

  .scrn-txt {
    width: 80vw;
    span {
      font-weight: bold;
      font-size: $font-size--2;
    }

    p {
      font-size: $font-size--2;
      line-height: $font-size--5;
      text-align: justify;
    }
  }

  .ppl-wrapper {
    justify-content: space-between;
    .ppl--1 {
      background-image: url("../assets/img/Girl.png");
      bottom: -5%;
      height: 15vw;
      width: 13vw;
    }

    .ppl--2 {
      background-image: url("../assets/img/Man.png");
      left: 50%;
      bottom: -10%;
      height: 17vw;
      width: 17vw;
    }

    .ppl--3 {
      background-image: url("../assets/img/Girl-1.png");   
      bottom: .5%;
      right: 2.5%;  
      height: 20vw;
      width: 20vw; 
    }
  }
}


.iphone {
  background-image: url("../assets/img/Phone.png");
  background-position: bottom;
  width: 60vw;
  height: 525px;

  .iphone-components {
    width: 20vw;
    height: 100%;
    margin: 0 auto;
  }
}

.final-wrapper {
  .final-txt {
    width: 43vw;
    p {
      text-align: justify;

        font-size: $font-size--2;
        line-height: $font-size--5;
      }
  }

  .final-img {
    width: 43vw;
    .news-line {
      background-image:url('../assets/img/NewspaperStack.png');
    }

    .news-digital {
      background-image:url('../assets/img/Comp.png');
    }
  }
}

.final-words-wrapper {
  .final-div {
    height: calc(80vw / 3);
  }

  p {
    z-index: 10;
    width: 80vw;
    text-align: justify;
    font-size: $font-size--2;
    line-height: $font-size--5;
  }
}

</style>
