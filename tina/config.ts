import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.GITHUB_BRANCH || process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main",
  clientId: process.env.TINA_CLIENT_ID || process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "projets",
        label: "Projets (Portfolio)",
        path: "src/content/projets",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre du Projet",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Catégorie",
            required: true,
            options: [
              { value: "Audiovisuel", label: "Audiovisuel" },
              { value: "Communication", label: "Communication" },
              { value: "Graphisme", label: "Graphisme" },
            ]
          },
          {
            type: "string",
            name: "date",
            label: "Date (ex: Octobre 2024)",
            required: true,
          },
          {
            type: "string",
            name: "context",
            label: "Contexte (Description)",
            ui: {
              component: "textarea"
            },
            required: true,
          },
          {
            type: "string",
            name: "anecdote",
            label: "Anecdote sur le projet",
            ui: {
              component: "textarea"
            },
          },
          {
            type: "string",
            name: "missions",
            label: "Missions (Bullet points)",
            list: true,
            required: true,
          },
          {
            type: "string",
            name: "hardSkills",
            label: "Hard Skills",
            list: true,
            required: true,
          },
          {
            type: "string",
            name: "softSkills",
            label: "Soft Skills",
            list: true,
            required: true,
          },
          {
            type: "object",
            name: "links",
            label: "Liens Externes",
            list: true,
            fields: [
              { type: "string", name: "label", label: "Nom du lien" },
              { 
                type: "string", 
                name: "type", 
                label: "Type d'icône", 
                options: ["pdf", "drive", "lien", "video"]
              },
              { type: "string", name: "url", label: "URL" }
            ]
          },
          {
            type: "object",
            name: "tools",
            label: "Outils utilisés",
            list: true,
            fields: [
              { type: "string", name: "name", label: "Nom de l'outil" },
              { type: "image", name: "logoUrl", label: "Image Logo (Optionnel)" }
            ]
          },
          {
            type: "image",
            name: "thumbnail",
            label: "Miniature (Image carte / liste de projets)",
            required: true,
          },
          {
            type: "string",
            name: "thumbnailAlt",
            label: "Texte alternatif Miniature (alt)",
          },
          {
            type: "image",
            name: "banner",
            label: "Bannière (Image en-tête de la page détail)",
          },
          {
            type: "string",
            name: "bannerAlt",
            label: "Texte alternatif Bannière (alt)",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenu enrichi (Optionnel)",
            isBody: true,
          },
        ],
      },
      {
        name: "pages",
        label: "Pages du site",
        path: "src/content/pages",
        format: "json",
        match: {
          include: "*",
        },
        templates: [
          {
            name: "accueil",
            label: "Page Accueil",
            fields: [
              { type: "string", name: "heroTitle", label: "Titre du Hero", required: true },
              { type: "string", name: "heroDescription", label: "Description du Hero", ui: { component: "textarea" } },
              { type: "image", name: "heroImage", label: "Image Hero principale (photo-cv)" },
              { type: "string", name: "bioTitle", label: "Titre Bio" },
              { type: "string", name: "bioContent", label: "Contenu Bio", ui: { component: "textarea" } },
              { type: "image", name: "cvFile", label: "Fichier CV (PDF ou Image)" },
              {
                type: "object",
                name: "hardskills",
                label: "Hardskills",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Compétence (Ex: Communication)" },
                  { type: "string", name: "tools", label: "Outils concernés" }
                ]
              },
              {
                type: "string",
                name: "softskills",
                label: "Softskills",
                list: true,
              },
              {
                type: "object",
                name: "interets",
                label: "Centres d'intérêt (Images Carrousel)",
                list: true,
                fields: [
                  { type: "image", name: "img", label: "Image" },
                  { type: "string", name: "text", label: "Label/Tag" }
                ]
              }
            ]
          },
          {
            name: "parcours",
            label: "Mon Parcours",
            fields: [
              {
                type: "string",
                name: "pageTitle",
                label: "Titre principal de la page",
              },
              {
                type: "string",
                name: "pageSubtitle",
                label: "Sous-titre / Description de la page",
                ui: { component: "textarea" },
              },
              {
                type: "object",
                name: "experiences",
                label: "Expériences Professionnelles",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Poste" },
                  { type: "string", name: "company", label: "Entreprise" },
                  { type: "string", name: "date", label: "Date ou Période" },
                  { type: "string", name: "description", label: "Contexte global", ui: { component: "textarea" } },
                  { type: "string", name: "missions", label: "Missions (bullet points)", list: true }
                ]
              },
              {
                type: "object",
                name: "formations",
                label: "Formations",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Intitulé" },
                  { type: "string", name: "school", label: "École / Établissement" },
                  { type: "string", name: "location", label: "Localisation" },
                  { type: "string", name: "date", label: "Années" },
                  { type: "string", name: "description", label: "Description de la formation", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            name: "contact",
            label: "Contact",
            fields: [
              { type: "string", name: "heading", label: "Surtitre", required: true },
              { type: "string", name: "title", label: "Titre principal", required: true },
              { type: "string", name: "description", label: "Paragraphe de description", ui: { component: "textarea" } },
              { type: "string", name: "email", label: "Adresse e-mail (Affichée & Mailto)", required: true },
              { type: "string", name: "linkedin", label: "URL profil LinkedIn" },
              { type: "string", name: "formspreeId", label: "ID de formulaire Formspree (ex: mdorkkkx)", required: true }
            ]
          }
        ]
      }
    ],
  },
});
