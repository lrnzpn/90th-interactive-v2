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
              .collapse-laptop.center.col.wh
                .laptop-wrapper.center 
                  .mac-wrapper.center
                    .mac-txt.static
      
                .laptop-txt-wrapper.center.absolute
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
                .scrn.lt-pos.absolute.center
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
              .ctrl.absolute.jc-flex-start
                button(v-on:click="clickReset") Reset App
              //- 3 columns
              .mobile-div-wrapper.row.center.wh
                .mobile-div.center.mob-ft
                  // livestreaming
                  transition(name="fade")
                    .mobile-txt-div.center.absolute(v-if="livestream")
                      .mb-txt-wrap.ai-flex-start.col
                        .close-wrap.jc-flex-end
                          .close(v-on:click="closeModal")
                        span Livestreaming
                        p
                          | "[The GUIDON] does livestreaming ...this might be a good way to get access to watches because you’re going to get
                          | that push notification ...Just one tap and you’re watching already."
                        span Jacob Uriel R. Quintos,<br> Digital Development Deputy
                  // breaking articles
                  transition(name="fade")
                    .mobile-txt-div.center.absolute(v-if="breaking")
                      .mb-txt-wrap.ai-flex-start.col
                        .close-wrap.jc-flex-end
                          .close(v-on:click="closeModal")
                        span Breaking Articles
                        p
                          | "I think one of the main features [is transmitting] all the breaking articles, especially if they are relevant
                          | because the [article’s popularity] really depends on relevance."
                        span Bryce R. Rubi,<br> Social Media Manager

                .mobile-div.jc-flex-end.col.main-mob
                  .ip-wrapper
                    .iphone-txt.mtb-3p
                     span Click on the red elements to view the future Guidon app features.
                    .iphone-wrapper
                      .iphone.background
                        .ip-content-wrapper.center
                          .ip-content.center
                            .iphone-components.center.col.wh
                              .live-wrapper
                                #live.static(v-bind:class="{alpha : liveAlpha}" v-on:click="clickLive")
                              .article-wrapper
                                #article.static(v-bind:class="{alpha : articleAlpha}" v-on:click="clickArticle")
                                .save-wrapper
                                  #save.static(v-bind:class="{alpha : saveAlpha}" v-on:click="clickSave")
                              .chat-wrapper
                                #chat.static(v-bind:class="{alpha : chatAlpha}" v-on:click="clickChat")
                          
                .mobile-div.center.mob-ft
                  // saved articles
                  transition(name="fade")
                    .mobile-txt-div.center.absolute(v-if="saved")
                      .mb-txt-wrap.ai-flex-start.col
                        .close-wrap.jc-flex-end
                            .close(v-on:click="closeModal")
                        span Saved Articles
                        p
                          | "Having a feature that can save articles, because the website we have now, you can only save it by having the
                          | tab open and a lot of our content is timeless in nature"
                        span Jason T. Mariano,<br> Design Executive Editor

                  transition(name="fade")
                    .mobile-txt-div.center.absolute(v-if="forum")
                      .mb-txt-wrap.ai-flex-start.col
                        .close-wrap.jc-flex-end
                          .close(v-on:click="closeModal")
                        span Chat Forum
                        p
                          | "I think it would be good if there was a forum portion.
                          | The only time the reader really has something to say is when our work is already done."
                        span Carmela Masiglat,<br> Graphic Design Editor                    

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
        #triangle.center
          transition(name="fade" mode="out-in")
            .triangle.triangle-w.bounce(v-if="getActiveSection >= 7 && getActiveSection < 10 || getActiveSection >=12 && getActiveSection < 25")
            .triangle.triangle-n.bounce(v-else)



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
      liveAlpha: false,
      articleAlpha: false,
      saveAlpha: false,
      chatAlpha: false,
      livestream: false,
      breaking: false,
      saved: false,
      forum: false
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
        // console.log(`Active - ${store.active} : ${rect.top}`);
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
        try {
          document.querySelector(".srch").removeAttribute("style");
        } catch {
          // Displays this error
          // Uncaught TypeError: Cannot read property 'removeAttribute' of null at a.scroll
          // So lets not show it :)
        }
      }
    },
    clickLive() {
      // enable alpha class
      this.articleAlpha = true;
      this.liveAlpha = false;
      this.chatAlpha = true;
      this.saveAlpha = true;
      // display appropriate text
      this.livestream = true;
      this.breaking = false;
      this.saved = false;
      this.forum = false;
    },
    clickArticle() {
      this.articleAlpha = false;
      this.liveAlpha = true;
      this.chatAlpha = true;
      this.saveAlpha = true;

      this.livestream = false;
      this.breaking = true;
      this.saved = false;
      this.forum = false;
    },
    clickSave() {
      this.articleAlpha = true;
      this.liveAlpha = true;
      this.chatAlpha = true;
      this.saveAlpha = false;

      this.livestream = false;
      this.breaking = false;
      this.saved = true;
      this.forum = false;
    },
    clickChat() {
      this.articleAlpha = true;
      this.liveAlpha = true;
      this.chatAlpha = false;
      this.saveAlpha = true;

      this.livestream = false;
      this.breaking = false;
      this.saved = false;
      this.forum = true;
    },
    clickReset() {
      this.articleAlpha = false;
      this.liveAlpha = false;
      this.chatAlpha = false;
      this.saveAlpha = false;

      this.livestream = false;
      this.breaking = false;
      this.saved = false;
      this.forum = false;
    },
    closeModal() {
      this.livestream = false;
      this.breaking = false;
      this.saved = false;
      this.forum = false;
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

#laptop {
  z-index: -1;
}

#fixed {
  z-index: 7;
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

    @include screen("md") {
    }
    @include screen("xs") {
      width: 18vw;
      height: 15vw;
    }

    .search {
      height: 3.5vw;
      width: 3.5vw;
      background-image: url("../assets/img/search.png");

      @include screen("md") {
      }

      @include screen("xs") {
        height: 5.5vw;
        width: 5.5vw;
      }
    }

    span {
      color: white;
      font-size: $font-size--8;
      display: inline-block;
      white-space: nowrap;
      @include screen("md") {
      }

      @include screen("xs") {
        font-size: $font-size--9;
      }
    }
  }

  .logo {
    .tgdn {
      background-image: url("../assets/img/02 90th Year Logo (BLUE).png");
      width: 15vw;
      height: 15vw;

      @include screen("md") {
        width: 30vw;
        height: 30vw;
      }
      @include screen("xs") {
        width: 45vw;
        height: 45vw;
      }
    }
  }

  .cc {
    div {
      text-align: center;

      span {
        color: $navy;
        line-height: $font-size--5;
        font-size: $font-size--3;

        @include screen("md") {
          font-size: $font-size--5;
          line-height: 2em;
        }

        @include screen("xs") {
          font-size: $font-size--7;
        }
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

  .collapse-laptop {
    .mac-wrapper {
      height: 50vw;

      .mac-txt {
        background-image: url("../assets/img/search-laptop.png");
        width: 100vw;
        height: 50vw;
      }
    }
  }

  .laptop-txt-wrapper {
    height: auto;

    @include screen("md") {
      position: relative;
    }

    .blue {
      @include screen("md") {
        width: 80vw;
        // increase by 2
        font-size: $font-size--5;
      }

      @include screen("xs") {
        // increase by 2
        font-size: $font-size--7;
      }
    }
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

      @include screen("md") {
        width: 80vw;
      }

      @include screen("xs") {
      }

      span {
        font-weight: bold;
        font-style: italic;
        font-size: $font-size--3;
        @include screen("md") {
          font-size: $font-size--5;
        }

        @include screen("xs") {
          font-size: $font-size--7;
        }
      }

      p {
        font-size: $font-size--3;
        line-height: $font-size--5;
        @include screen("md") {
          font-size: $font-size--5;
          line-height: 1.5em;
        }

        @include screen("xs") {
          font-size: $font-size--7;
        }
      }
    }

    .prks-img {
      width: 43vw;
      @include screen("md") {
        width: 80vw;
      }
      @include screen("xs") {
      }

      .tgdn-mob {
        background-position: bottom;
        background-image: url("../assets/img/guidon-min.gif");
        width: 30vw;
        @include screen("md") {
          width: 100%;
        }
        @include screen("xs") {
        }
      }

      .illus {
        background-image: url("../assets/img/Illustartion.png");
        width: 33vw;
        @include screen("md") {
          width: 50vw;
        }
        @include screen("xs") {
          width: 75vw;
        }
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

      @include screen("md") {
        line-height: 2em;
        font-size: $font-size--4;
      }
      @include screen("xs") {
        font-size: $font-size--6;
      }
    }
  }

  .pc-txt-intro {
    text-align: center;

    @include screen("md") {
      width: 80vw;
    }

    @include screen("xs") {
      width: 75vw;
    }

    p {
      font-size: $font-size--3;
      line-height: $font-size--5;
      color: $navy;

      @include screen("md") {
        line-height: 2em;
        font-size: $font-size--5;
      }

      @include screen("xs") {
        font-size: $font-size--7;
      }
    }
  }
}

.pc-wrapper {
  .pros {
    background: $light-navy-gradient;

    @include screen("md") {
      width: 100vw;
      height: 75vw;
    }
    @include screen("xs") {
    }

    span {
      color: white;
      font-size: $font-size--9 * 2; // 10vw
      @include screen("md") {
        font-size: $font-size--9 * 2.5;
      }
      @include screen("xs") {
        font-size: $font-size--9 * 3;
      }
    }
  }

  .cons {
    background: $red-gradient;
    @include screen("md") {
      width: 100vw;
      height: 75vw;
    }
    @include screen("xs") {
    }

    span {
      color: white;
      font-size: $font-size--9 * 2; // 10vw
      @include screen("md") {
        font-size: $font-size--9 * 2.5;
      }
      @include screen("xs") {
        font-size: $font-size--9 * 3;
      }
    }
  }

  .pc-txt {
    span {
      width: 40vw;
      text-align: center;
      font-size: $font-size--4;

      @include screen("md") {
        font-size: $font-size--7;
        width: 80vw;
      }
      @include screen("xs") {
        font-size: $font-size--9;
      }
    }
  }

  .pc-img {
    @include screen("md") {
      width: 100vw;
    }

    @include screen("xs") {
    }
  }

  .pc-img-crds {
    @include screen("md") {
      justify-content: center;
    }
    @include screen("xs") {
    }

    span {
      padding: 5%;
      color: $black-alpha;
      font-size: 1.25vw;

      @include screen("md") {
        font-size: $font-size--3;
      }

      @include screen("xs") {
        font-size: $font-size--5;
      }
    }
  }
}

.future {
  .scrn {
    background-image: url("../assets/img/Window.png");
    width: 90vw;
    height: 90vh;
  }

  .scrn-txt {
    width: 80vw;
    span {
      font-weight: bold;
      font-size: $font-size--2;

      @include screen("md") {
        font-size: $font-size--4;
      }

      @include screen("xs") {
        font-size: $font-size--6;
      }
    }

    p {
      font-size: $font-size--2;
      line-height: $font-size--5;
      text-align: justify;

      @include screen("md") {
        font-size: $font-size--4;
        line-height: 1.5em;
      }

      @include screen("xs") {
        font-size: $font-size--6;
      }
    }
  }

  .ppl-wrapper {
    justify-content: space-between;
    .ppl--1 {
      background-image: url("../assets/img/Girl.png");
      left: -6%;
      height: 15vw;
      width: 13vw;
      @include screen("md") {
        height: 20vw;
      }

      @include screen("xs") {
      }
    }

    .ppl--2 {
      background-image: url("../assets/img/Man.png");
      left: 50%;
      bottom: -8%;
      height: 17vw;
      width: 17vw;

      @include screen("md") {
        height: 30vw;
      }
      @include screen("xs") {
      }
    }

    .ppl--3 {
      background-image: url("../assets/img/Girl-1.png");
      bottom: 0.5%;
      right: 2.5%;
      height: 20vw;
      width: 20vw;

      @include screen("md") {
        height: 30vw;
      }

      @include screen("xs") {
      }
    }
  }
}

.menu {
  height: 50vw;
  @include screen("md") {
    height: 70vw;
  }

  @include screen("xs") {
    height: 90vw;
  }
}

.mobile-wrapper {
  .iphone-txt {
    text-align: center;

    span {
      font-size: 1.75vw;
      color: white;

      @include screen("md") {
        font-size: $font-size--3;
      }

      @include screen("xs") {
        font-size: $font-size--5;
      }
    }
  }

  .iphone-wrapper {
    .iphone {
      background-image: url("../assets/img/Phone.png");
      background-position: top center;
      width: calc(100vw / 3);
      height: 45vw;

      @include screen("md") {
        width: 80vw;
        height: 100vw;
      }

      @include screen("xs") {
        width: 100vw;
        height: 150vw;
      }
    }

    .ip-content-wrapper {
      height: 100%;

      .ip-content {
        height: 75%;
        width: 25vw;
        top: 10%;

        @include screen("md") {
          width: 60vw;
        }

        @include screen("xs") {
          width: 80vw;
          top: 7.5%;
        }
      }
    }
  }

  .mobile-txt-div {
    color: white;
    width: 30vw;
    transition: 0.5s all ease;

    .mb-txt-wrap {
      width: 80vw;

      @include screen("md") {
        background-color: #2c4396;
        padding: 2.5% 5% 5% 5%;
        border-radius: 10px;
        width: 75vw;
      }
    }

    @include screen("md") {
      width: 100vw;
      z-index: 69;
    }

    span {
      font-weight: bold;
      font-size: 1.75vw;

      @include screen("md") {
        font-size: $font-size--3;
      }

      @include screen("xs") {
        font-size: $font-size--5;
      }
    }

    p {
      font-size: 1.75vw;
      text-align: justify;

      @include screen("md") {
        font-size: $font-size--3;
      }

      @include screen("xs") {
        font-size: $font-size--5;
      }
    }
  }
}

.final-wrapper {
  .final-txt {
    width: 43vw;
    @include screen("md") {
      width: 80vw;
    }
    @include screen("xs") {
    }

    p {
      text-align: justify;

      font-size: $font-size--2;
      line-height: $font-size--5;
      @include screen("md") {
        font-size: $font-size--4;
        line-height: 1.5em;
      }
      @include screen("xs") {
        font-size: $font-size--6;
      }
    }
  }

  .final-img {
    width: 43vw;
    .final-img-wrapper {
      width: 43vw;

      @include screen("md") {
        width: 80vw;
      }
      @include screen("xs") {
      }
      .news-line {
        background-image: url("../assets/img/NewspaperStack.png");
        @include screen("md") {
          width: 80vw;
        }
        @include screen("xs") {
        }
      }

      .news-digital {
        background-image: url("../assets/img/Comp.png");
        @include screen("md") {
          width: 80vw;
        }
        @include screen("xs") {
        }
      }
    }
  }
}

.final-words-wrapper {
  .final-div {
    height: calc(80vw / 3);
    @include screen("md") {
      height: calc(120vw / 2);
    }
    @include screen("xs") {
      height: 95vw;
    }
  }

  p {
    z-index: 10;
    width: 80vw;
    text-align: justify;
    font-size: $font-size--2;
    line-height: $font-size--5;

    @include screen("md") {
      font-size: $font-size--4;
      line-height: 1.5em;
    }
    @include screen("xs") {
      font-size: $font-size--6;
    }
  }
}
</style>