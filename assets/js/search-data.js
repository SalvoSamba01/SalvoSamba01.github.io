// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-academic-activities",
          title: "academic activities",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-memo-the-first-version-of-synthforensics-a-human-centric-benchmark-for-detecting-synthetic-video-deepfakes-is-now-available-on-arxiv",
          title: ':memo: The first version of SynthForensics, a human-centric benchmark for detecting synthetic video...',
          description: "",
          section: "News",},{id: "news-arrows-counterclockwise-major-update-of-synthforensics-on-arxiv-now-20-445-videos-from-8-t2v-and-7-i2v-generators-a-human-preference-study-and-15-evaluated-detectors",
          title: ':arrows_counterclockwise: Major update of SynthForensics on arXiv: now 20,445 videos from 8 T2V...',
          description: "",
          section: "News",},{id: "news-page-facing-up-our-challenge-paper-adversarial-attacks-on-deepfake-detectors-a-challenge-in-the-era-of-ai-generated-media-aadd-2026-has-been-accepted-at-acm-multimedia-2026-in-rio-de-janeiro-challenge",
          title: ':page_facing_up: Our challenge paper Adversarial Attacks on Deepfake Detectors: A Challenge in the...',
          description: "",
          section: "News",},{id: "news-tada-our-paper-synthforensics-benchmarking-and-evaluating-people-centric-synthetic-video-deepfakes-has-been-accepted-as-a-poster-at-the-neurips-2026-evaluations-amp-amp-datasets-track-arxiv",
          title: ':tada: Our paper SynthForensics: Benchmarking and Evaluating People-Centric Synthetic Video Deepfakes has been...',
          description: "",
          section: "News",},{id: "teachings-biometrics-and-fingerprint-acquisition-seminar",
          title: 'Biometrics and Fingerprint Acquisition Seminar',
          description: "Advanced seminar on biometric systems with emphasis on fingerprint acquisition techniques, processing, and analysis. Topics include biometric fundamentals, fingerprint characteristics, acquisition methods, image quality assessment, and real-world applications.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/biometrics-seminar/";
            },},{id: "teachings-pytorch-module-deep-learning-course",
          title: 'PyTorch Module - Deep Learning Course',
          description: "PyTorch module as part of the Deep Learning course in the Master&#39;s degree program in Data Science (LM-DATA) at the University of Catania. This module covers practical deep learning implementation using PyTorch, including neural network construction, training, and optimization.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/pytorch-deep-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%61%6C%76%61%74%6F%72%65.%73%61%6D%62%61%74%61%72%6F@%70%68%64.%75%6E%69%63%74.%69%74", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'Linkedin',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-github',
        title: 'Github',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
