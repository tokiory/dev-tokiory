import {
  defineConfig,
  presetIcons,
  presetMini,
  transformerDirectives,
} from "unocss";

const CUSTOM_COLORS = {
  // Primarly used for foregrounds
  driftwood: {
    "50": "#f9f5ed",
    "100": "#efe7d2",
    "200": "#e1cda7",
    "300": "#d0ad74",
    "400": "#c1904e",
    "500": "#b88142",
    "600": "#996335",
    "700": "#7b4a2d",
    "800": "#683d2b",
    "900": "#5a3529",
    "950": "#331b15",
  },

  // Primarly used for backgrounds
  frangipani: {
    "50": "#fff7ed",
    "100": "#ffedd5",
    "200": "#ffdbb3",
    "300": "#ffb972",
    "400": "#fd903a",
    "500": "#fc7113",
    "600": "#ed5509",
    "700": "#c43e0a",
    "800": "#9c3210",
    "900": "#7d2b11",
    "950": "#441306",
  },
};

export default defineConfig({
  theme: {
    colors: {
      ...CUSTOM_COLORS,
      brand: {
        foreground: CUSTOM_COLORS.driftwood["950"],
        surface: CUSTOM_COLORS.frangipani["50"],
      },
    },
  },
  presets: [
    presetMini(),
    presetIcons({
      collections: {
        tabler: () =>
          import("@iconify-json/tabler/icons.json").then((i) => i.default),
      },
    }),
  ],
  transformers: [transformerDirectives()],
});
