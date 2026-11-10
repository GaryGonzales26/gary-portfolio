<template>
  <main class="min-h-screen bg-slate-50 py-16 dark:bg-slate-950">
    <div class="mx-auto max-w-5xl px-4 lg:grid lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-10">
      <aside class="hidden lg:block lg:sticky lg:top-4 lg:self-start">
        <nav class="mt-20 space-y-4 text-sm text-slate-500 dark:text-slate-400">
          <p class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
            Sections
          </p>
          <ul class="space-y-1">
            <li>
              <a
                href="#skills"
                @click="setActiveSection('skills')"
                :class="[
                  'block rounded-md px-2 py-1 transition',
                  activeSection === 'skills'
                    ? 'bg-slate-900 text-slate-50 dark:bg-slate-100 dark:text-slate-900'
                    : 'hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50'
                ]"
              >
                Skill Sets
              </a>
            </li>
            <li>
              <a  
                href="#companies"
                @click="setActiveSection('companies')"
                :class="[
                  'block rounded-md px-2 py-1 transition',
                  activeSection === 'companies'
                    ? 'bg-slate-900 text-slate-50 dark:bg-slate-100 dark:text-slate-900'
                    : 'hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50'
                ]"
              >
                Companies
              </a>
            </li>
            <li>
              <a
                href="#projects"
                @click="setActiveSection('projects')"
                :class="[
                  'block rounded-md px-2 py-1 transition',
                  activeSection === 'projects'
                    ? 'bg-slate-900 text-slate-50 dark:bg-slate-100 dark:text-slate-900'
                    : 'hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50'
                ]"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#education"
                @click="setActiveSection('education')"
                :class="[
                  'block rounded-md px-2 py-1 transition',
                  activeSection === 'education'
                    ? 'bg-slate-900 text-slate-50 dark:bg-slate-100 dark:text-slate-900'
                    : 'hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50'
                ]"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#contact"
                @click="setActiveSection('contact')"
                :class="[
                  'block rounded-md px-2 py-1 transition',
                  activeSection === 'contact'
                    ? 'bg-slate-900 text-slate-50 dark:bg-slate-100 dark:text-slate-900'
                    : 'hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50'
                ]"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      
      <div>
        <header class="mb-6 flex items-center justify-between">
        <div class="space-y-0.5">
        </div>

        <button
          type="button"
          @click="toggleTheme"
          class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm backdrop-blur transition hover:border-slate-300 hover:bg-white dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-slate-500"
        >
          <span
            class="flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-[0.6rem] text-white dark:bg-amber-300 dark:text-slate-950"
          >
            <span v-if="theme === 'light'">☾</span>
            <span v-else>☀</span>
          </span>
          <span class="hidden text-xs md:inline">
            {{ theme === 'light' ? 'Dark mode' : 'Light mode' }}
          </span>
        </button>
      </header>

      <nav
        class="sticky top-0 z-20 mb-8 flex gap-3 overflow-x-auto border-b border-slate-100 bg-slate-50/80 py-3 text-xs font-medium text-slate-500 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80 lg:hidden"
      >
        <a
          href="#skills"
          @click="setActiveSection('skills')"
          :class="[
            'rounded-full px-3 py-1.5 text-xs transition',
            activeSection === 'skills'
              ? 'bg-slate-900 text-slate-50 dark:bg-slate-100 dark:text-slate-900'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'
          ]"
        >
          Skills
        </a>
        <a
          href="#companies"
          @click="setActiveSection('companies')"
          :class="[
            'rounded-full px-3 py-1.5 text-xs transition',
            activeSection === 'companies'
              ? 'bg-slate-900 text-slate-50 dark:bg-slate-100 dark:text-slate-900'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'
          ]"
        >
          Companies
        </a>
        <a
          href="#projects"
          @click="setActiveSection('projects')"
          :class="[
            'rounded-full px-3 py-1.5 text-xs transition',
            activeSection === 'projects'
              ? 'bg-slate-900 text-slate-50 dark:bg-slate-100 dark:text-slate-900'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'
          ]"
        >
          Projects
        </a>
        <a
          href="#education"
          @click="setActiveSection('education')"
          :class="[
            'rounded-full px-3 py-1.5 text-xs transition',
            activeSection === 'education'
              ? 'bg-slate-900 text-slate-50 dark:bg-slate-100 dark:text-slate-900'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'
          ]"
        >
          Education
        </a>
        <a
          href="#contact"
          @click="setActiveSection('contact')"
          :class="[
            'rounded-full px-3 py-1.5 text-xs transition',
            activeSection === 'contact'
              ? 'bg-slate-900 text-slate-50 dark:bg-slate-100 dark:text-slate-900'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'
          ]"
        >
          Contact
        </a>
      </nav>

      <!-- Hero -->
      <section class="grid items-center gap-10 md:grid-cols-2 lg:gap-20 animate-fade-in-up">
        <div class="space-y-6">
          <h1 class="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-slate-50">
            Hello, <br> I'm Gary Gonzales
          </h1>

          <div class="space-y-1 text-slate-700 dark:text-slate-300">
            <p class="text-xl font-semibold">Full stack web developer</p>
            <p class="text-sm">3+ Years</p>
            <p class="max-w-xl text-sm text-slate-600 dark:text-slate-400">
              I’m currently working as a Full Stack Developer, driven by a deep passion for technology and innovation. With a solid foundation in both front-end and back-end development, I specialize in building seamless, efficient, and visually engaging web applications. I enjoy transforming complex concepts into intuitive, user-focused digital experiences that deliver real value and performance.
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              class="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-transform transition-colors duration-200 hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:hover:bg-emerald-400"
            >
              <span
                class=""
              >
              </span>
              <span>Contact Me</span>
            </a>
            <!-- <a
              href="/cv.pdf"
              download
              class="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-800 shadow-sm transition-transform transition-colors duration-200 hover:-translate-y-0.5 hover:border-emerald-500 hover:text-emerald-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-emerald-400 dark:hover:text-emerald-300"
            >
              <span
                class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-xs"
              >
                ⬇
              </span>
              <span>Download CV</span>
            </a> -->
          </div>
        </div>

        <div class="flex justify-center md:justify-end animate-fade-in-up animate-delay-1">
          <div
            class="h-56 w-40 overflow-hidden border-4 border-white shadow-md transition-transform duration-500 hover:-translate-y-1 hover:rotate-6 hover:shadow-lg sm:h-64 sm:w-48 md:h-72 md:w-56 lg:h-80 lg:w-64 dark:border-slate-950"
          >
            <img
              :src="profile"
              alt="Gary Gonzales"
              class="h-full w-full rounded-sm object-cover"
            />
          </div>
        </div>
      </section>

      <!-- Skill Sets -->
      <section id="skills" class="mt-20 animate-fade-in-up animate-delay-1">
        <h2 class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
          Skill Sets
        </h2>

        <div class="mt-6 space-y-6">
          <div
            v-for="category in skills"
            :key="category.title"
            class="rounded-lg border border-slate-200 bg-white shadow-sm transition-transform transition-shadow duration-200 hover:-translate-y-1 hover:shadow-md hover:border-emerald-100 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-400"
          >
            <div class="flex items-center justify-between px-6 py-4">
              <div class="space-y-1">
                <p class="text-sm font-semibold text-slate-900 dark:text-slate-50">
                  {{ category.title }}
                </p>
                <p class="text-xs text-slate-500 dark:text-slate-400">
                  {{ category.subtitle }}
                </p>
              </div>
              <p class="text-xs text-slate-400 dark:text-slate-500">
                {{ category.levelLabel }}
              </p>
            </div>

            <div class="border-t border-slate-100 px-6 py-4">
              <ul class="space-y-4">
                <li
                  v-for="item in category.items"
                  :key="item.name"
                  class="space-y-2"
                >
                  <div class="flex items-center justify-between text-sm text-slate-700 dark:text-slate-300">
                    <div class="flex items-center gap-3">
                      <div
                        class="flex h-7 w-7 items-center justify-center rounded-md bg-slate-100 text-[0.65rem] font-semibold uppercase tracking-tight text-slate-700 dark:bg-slate-800 dark:text-slate-100"
                      >
                        {{ item.short || item.name.charAt(0) }}
                      </div>
                      <span>{{ item.name }}</span>
                    </div>
                    <!-- <span class="text-xs font-medium text-slate-600 dark:text-slate-400">{{ item.percentage }}%</span> -->
                  </div>
                  <div class="ml-10">
                    <div class="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                      <div 
                        class="h-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all duration-1000 ease-out"
                        :style="{ width: item.percentage + '%' }"
                      ></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Companies -->
      <section id="companies" class="mt-20 animate-fade-in-up animate-delay-2">
        <h2 class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
          Companies
        </h2>

        <div class="mt-6 space-y-4">
          <article
            v-for="company in companies"
            :key="company.name"
            class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-transform transition-shadow duration-200 hover:-translate-y-1 hover:shadow-md hover:border-emerald-100 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-400"
          >
            <h3 class="text-sm font-semibold text-slate-900 dark:text-slate-50">
              {{ company.role }}
            </h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">
              {{ company.name }}
            </p>
            <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
              {{ company.period }}
            </p>
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {{ company.description }}
            </p>
          </article>
        </div>
      </section>

      <!-- Projects -->
      <section id="projects" class="mt-20 animate-fade-in-up animate-delay-2">
        <h2 class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
          Projects
        </h2>

        <div class="mt-6 space-y-4">
          <article
            v-for="project in projects"
            :key="project.name"
            class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-transform transition-shadow duration-200 hover:-translate-y-1 hover:shadow-md hover:border-emerald-100 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-400"
          >
            <div class="flex items-center justify-between gap-3">
              <h3 class="text-sm font-semibold text-slate-900 dark:text-slate-50">
                {{ project.name }}
              </h3>
              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                rel="noopener"
                class="text-xs font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
              >
                View
              </a>
            </div>
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {{ project.description }}
            </p>
            <p class="mt-2 text-xs text-slate-500 dark:text-slate-400">
              {{ project.tech.join(' • ') }}
            </p>
          </article>
        </div>
      </section>

      <!-- Education -->
      <section id="education" class="mt-20 mb-12 animate-fade-in-up animate-delay-3">
        <h2 class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
          Education
        </h2>

        <div class="mt-6 space-y-4">
          <article
            v-for="item in education"
            :key="item.school"
            class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-transform transition-shadow duration-200 hover:-translate-y-1 hover:shadow-md hover:border-emerald-100 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-400"
          >
            <h3 class="text-sm font-semibold text-slate-900 dark:text-slate-50">
              {{ item.degree }}
            </h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">
              {{ item.school }}
            </p>
            <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
              {{ item.period }}
            </p>
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {{ item.description }}
            </p>
          </article>
        </div>
      </section>

      <!-- Contact -->
      <section id="contact" class="mt-20 mb-8 animate-fade-in-up animate-delay-4">
        <h2 class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
          Contact
        </h2>

        <div
          class="mt-6 flex flex-col gap-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:items-center dark:border-slate-800 dark:bg-slate-900"
        >
          <div class="space-y-2 text-sm text-slate-700 text-center dark:text-slate-300">
            <p class="text-sm font-semibold text-slate-900 dark:text-slate-50">
              Let's work together
            </p>
            <p class="mx-auto max-w-md text-sm text-slate-600 dark:text-slate-300">
              If you have a project in mind or just want to say hi, feel free to reach out.
            </p>
          </div>
          
          <div class="flex flex-1 flex-col gap-4 w-full md:max-w-md mx-auto">
            <form class="space-y-3" @submit.prevent="handleContactSubmit">
              <div class="flex flex-col gap-1">
                <label class="text-xs font-medium text-slate-600 dark:text-slate-300">Name</label>
                <input
                  v-model="contactForm.name"
                  type="text"
                  class="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                  placeholder="Your name"
                  required
                />
              </div>

              <div class="flex flex-col gap-1">
                <label class="text-xs font-medium text-slate-600 dark:text-slate-300">Email Address</label>
                <input
                  v-model="contactForm.email"
                  type="email"
                  class="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div class="flex flex-col gap-1 items-center">
                <label class="text-xs font-medium text-slate-600 dark:text-slate-300 self-start">Subject</label>
                <input
                  v-model="contactForm.subject"
                  type="text"
                  class="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 text-center shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                  placeholder="What would you like to talk about?"
                  required
                />
              </div>

              <div class="flex flex-col gap-1 items-center">
                <label class="text-xs font-medium text-slate-600 dark:text-slate-300 self-start">Message</label>
                <textarea
                  v-model="contactForm.message"
                  rows="4"
                  class="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 text-center shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                  placeholder="Write your message here..."
                  required
                />
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                :class="[
                  'inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-transform transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2',
                  isSubmitting 
                    ? 'bg-slate-400 cursor-not-allowed' 
                    : 'bg-emerald-500 hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-md dark:hover:bg-emerald-400'
                ]"
              >
                <span
                  :class="[
                    isSubmitting ? 'bg-slate-500/90' : 'bg-emerald-600/90'
                  ]"
                >
                  <span v-if="isSubmitting"></span>
                </span>
                <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
              </button>
              
              <!-- Success/Error Message -->
              <div
                v-if="submitMessage"
                :class="[
                  'mt-3 rounded-md px-3 py-2 text-sm',
                  submitStatus === 'success' 
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-800'
                    : 'bg-red-50 text-red-700 border border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800'
                ]"
              >
                {{ submitMessage }}
              </div>
            </form>
          </div>
        </div>
      </section>
      </div>
    </div>
  </main>
 </template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../config/emailjs.js';
import profile from '../assets/images/profile.jpg'
const theme = ref("light");
const activeSection = ref("skills");

const applyTheme = (value) => {
  if (typeof window === "undefined") return;
  const root = window.document.documentElement;
  if (value === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
  try {
    window.localStorage.setItem("theme", value);
  } catch {
    // ignore storage errors
  }
};

const setActiveSection = (id) => {
  activeSection.value = id;
};

const contactForm = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);
const submitMessage = ref("");
const submitStatus = ref(""); // 'success' or 'error'

const handleContactSubmit = async () => {
  if (typeof window === "undefined") return;

  // Reset previous messages
  submitMessage.value = "";
  submitStatus.value = "";

  // Validate form
  if (!contactForm.name || !contactForm.email || !contactForm.subject || !contactForm.message) {
    submitMessage.value = "Please fill in all fields before sending your message.";
    submitStatus.value = "error";
    return;
  }

  isSubmitting.value = true;

  try {
    // Template parameters that will be sent to EmailJS
    const templateParams = {
      from_name: contactForm.name,
      from_email: contactForm.email,
      subject: contactForm.subject,
      message: contactForm.message,
      to_email: 'ggonzales7418@gmail.com', // Your email address
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      emailjsConfig.serviceID, 
      emailjsConfig.templateID, 
      templateParams, 
      emailjsConfig.publicKey
    );
    
    if (response.status === 200) {
      submitMessage.value = "Thank you! Your message has been sent successfully.";
      submitStatus.value = "success";
      
      // Reset form
      contactForm.name = "";
      contactForm.email = "";
      contactForm.subject = "";
      contactForm.message = "";
    }
  } catch (error) {
    console.error('EmailJS Error:', error);
    submitMessage.value = "Sorry, there was an error sending your message. Please try again or contact me directly at ggonzales7418@gmail.com";
    submitStatus.value = "error";
  } finally {
    isSubmitting.value = false;
  }
};

onMounted(() => {
  if (typeof window === "undefined") return;

  let stored = null;
  try {
    stored = window.localStorage.getItem("theme");
  } catch {
    stored = null;
  }

  const prefersDark = window.matchMedia
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
    : false;

  const initial = stored === "dark" || (!stored && prefersDark) ? "dark" : "light";
  theme.value = initial;
  applyTheme(initial);
});

const toggleTheme = () => {
  const next = theme.value === "light" ? "dark" : "light";
  theme.value = next;
  applyTheme(next);
};

const skills = [
  {
    title: "Frontend",
    subtitle: "Frameworks and UI tooling I build interfaces with",
    levelLabel: "",
    items: [
      { name: "Vue.js", level: "Advanced", percentage: 75 },
      { name: "Nuxt.js", level: "Advanced", percentage: 60 },
      { name: "Tailwind CSS", level: "Advanced", percentage: 50 },
      { name: "Bootstrap", level: "Intermediate", percentage: 70 },
    ],
  },
  {
    title: "Backend & APIs",
    subtitle: ".NET and REST API development",
    levelLabel: "",
    items: [
      { name: "ASP.NET Web API", level: "Advanced", percentage: 85 },
      { name: "ASP.NET MVC", level: "Advanced", percentage: 80 },
    ],
  },
  {
    title: "Databases",
    subtitle: "Relational databases and SQL",
    levelLabel: "",
    items: [
      { name: "Microsoft SQL Server", level: "Intermediate", percentage: 60 },
      { name: "PostgreSQL", level: "Intermediate", percentage: 50 },
    ],
  },
];

const companies = [
  {
    name: "Fast Logistics",
    role: "Full Stack Developer/IT Programmer",
    period: "August 30, 2022 — Present",
    description:
      "I'm currently holding the position of IT Programmer at Fast Logistics.",
  }
];
const projects = [
   {
    name: "File Upload Management (FUM)",
    description: "Is a web-based application that allows developers to upload, manage, and update their system files directly on the server. It provides a secure and efficient way to deploy updates, manage version control, and streamline file distribution within the development environment. The system ensures controlled access and maintains logs of all uploaded files for tracking and accountability.",
    tech: ["Vue", "Bootstrap", ".Net Web API"],
    link: "",
  },
  {
    name: "eSpeed",
    description: "is a web-based application that automated system designed to calculate Request-to-Quote (RTQ) pricing for delivery trucks. It streamlines the entire quotation process by analyzing key logistics factors such as travel distance, vehicle type, load capacity, fuel consumption, and additional operational parameters. By automating these calculations, the system delivers quick, accurate, and consistent pricing estimates, significantly reducing manual work and minimizing human error. This enhances efficiency for service providers while giving customers faster and more reliable quotations.",
    tech: ["Vue", "Bootstrap", ".Net Web API"],
    link: "",
  },
  {
    name: "Databridge",
    description: "Is a web-based application tool that automates data generation, consolidation, and transfer. Users can upload an Excel file containing data, which the system processes and consolidates before sending it to another web application via an API. This streamlines data integration, reduces manual processing, and ensures seamless communication between systems.",
    tech: ["Nuxt", "Tailwind CSS", ".Net Web API"],
    link: "",
  },
  {
    name: "Meeting Attendance Tracker (MAT)",
    description: "Is a web-based application designed to help organizations and companies efficiently create, manage, and track meetings or events. It simplifies the process of organizing attendees by allowing administrators to specify and structure who can participate in each meeting. In addition to attendance management, MAT includes an interactive points system. If the meeting or event includes games or team activities, the meeting creator can easily award points to individual participants or groups. This feature enhances engagement and provides an enjoyable experience for attendees.",
    tech: ["Nuxt", "Tailwind CSS", ".Net Web API"],
    link: "",
  },
  {
    name: "Meeting Attendance Tracker Station (MAT Station)",
    description: "Is a web-based application integrated with the Meeting Attendance Tracker (MAT). It allows users to conveniently check in to meetings using a built-in QR code scanner, ensuring fast and accurate attendance recording. With MAT Station, users can also view the real-time attendee list and easily identify whether each participant is attending on-site (Face-to-Face) or Online. This provides organizers with clear visibility and helps streamline meeting coordination and monitoring.",
    tech: ["Nuxt", "Tailwind CSS", ".Net Web API"],
    link: "",
  },
  {
    name: "Personal Portfolio",
    description: "A clean, minimal portfolio built with Nuxt and Tailwind CSS.",
    tech: ["Nuxt", "Tailwind CSS"],
    link: "",
  },
];

const education = [
  {
    school: "STI College Calamba",
    degree: "Bachelor's degree, Information Technology",
    period: "2018 — 2022"
  },
    {
    school: "Camp Vicente Lim Integrated School",
    degree: "Information and Communication technology",
    period: "2012 — 2018"
  },
];
</script>
