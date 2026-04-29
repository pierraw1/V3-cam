// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: process.env.GITHUB_BRANCH || process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main",
  clientId: process.env.TINA_CLIENT_ID || process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
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
            required: true
          },
          {
            type: "string",
            name: "category",
            label: "Cat\xE9gorie",
            required: true,
            options: [
              { value: "Audiovisuel", label: "Audiovisuel" },
              { value: "Communication", label: "Communication" },
              { value: "Graphisme", label: "Graphisme" }
            ]
          },
          {
            type: "string",
            name: "date",
            label: "Date (ex: Octobre 2024)",
            required: true
          },
          {
            type: "string",
            name: "context",
            label: "Contexte (Description)",
            ui: {
              component: "textarea"
            },
            required: true
          },
          {
            type: "string",
            name: "anecdote",
            label: "Anecdote sur le projet",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "missions",
            label: "Missions (Bullet points)",
            list: true,
            required: true
          },
          {
            type: "string",
            name: "hardSkills",
            label: "Hard Skills",
            list: true,
            required: true
          },
          {
            type: "string",
            name: "softSkills",
            label: "Soft Skills",
            list: true,
            required: true
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
                label: "Type d'ic\xF4ne",
                options: ["pdf", "drive", "lien", "video"]
              },
              { type: "string", name: "url", label: "URL" }
            ]
          },
          {
            type: "object",
            name: "tools",
            label: "Outils utilis\xE9s",
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
            required: true
          },
          {
            type: "string",
            name: "thumbnailAlt",
            label: "Texte alternatif Miniature (alt)"
          },
          {
            type: "image",
            name: "banner",
            label: "Banni\xE8re (Image en-t\xEAte de la page d\xE9tail)"
          },
          {
            type: "string",
            name: "bannerAlt",
            label: "Texte alternatif Banni\xE8re (alt)"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenu enrichi (Optionnel)",
            isBody: true
          }
        ]
      },
      {
        name: "pages",
        label: "Pages du site",
        path: "src/content/pages",
        format: "json",
        match: {
          include: "*"
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
                  { type: "string", name: "title", label: "Comp\xE9tence (Ex: Communication)" },
                  { type: "string", name: "tools", label: "Outils concern\xE9s" }
                ]
              },
              {
                type: "string",
                name: "softskills",
                label: "Softskills",
                list: true
              },
              {
                type: "object",
                name: "interets",
                label: "Centres d'int\xE9r\xEAt (Images Carrousel)",
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
                label: "Titre principal de la page"
              },
              {
                type: "string",
                name: "pageSubtitle",
                label: "Sous-titre / Description de la page",
                ui: { component: "textarea" }
              },
              {
                type: "object",
                name: "experiences",
                label: "Exp\xE9riences Professionnelles",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Poste" },
                  { type: "string", name: "company", label: "Entreprise" },
                  { type: "string", name: "date", label: "Date ou P\xE9riode" },
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
                  { type: "string", name: "title", label: "Intitul\xE9" },
                  { type: "string", name: "school", label: "\xC9cole / \xC9tablissement" },
                  { type: "string", name: "location", label: "Localisation" },
                  { type: "string", name: "date", label: "Ann\xE9es" },
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
              { type: "string", name: "email", label: "Adresse e-mail (Affich\xE9e & Mailto)", required: true },
              { type: "string", name: "linkedin", label: "URL profil LinkedIn" },
              { type: "string", name: "formspreeId", label: "ID de formulaire Formspree (ex: mdorkkkx)", required: true }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
