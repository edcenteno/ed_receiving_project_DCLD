import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "es",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          "Guide Title": "Pallet Stacking Guide",
          "Subtitle": "Management system for optimal box arrangement on pallets. Scan barcodes to visualize 3D stacking patterns.",
          "Search Placeholder": "Enter or scan barcode...",
          "Search": "Search",
          "Clear": "Clear",
          "New Product": "New Product",
          "Save Pattern": "Save Pattern",
          "Cancel": "Cancel",
          "Box Dimensions": "Dimensions",
          "Boxes per Layer": "Boxes per Layer",
          "Max Height": "Max Layers",
          "Total Boxes": "Total Boxes",
          "3D Viewer": "3D Viewer",
          "Top View": "Top View",
          "Suggested Improvements": "Suggested improvements"
        }
      },
      es: {
        translation: {
          "Guide Title": "Guía de Acomodo de Pallets",
          "Subtitle": "Sistema de gestión para el acomodo óptimo de cajas en pallets. Escanee códigos de barras para visualizar patrones de apilamiento en 3D.",
          "Search Placeholder": "Ingrese código de barras o escanee...",
          "Search": "Buscar",
          "Clear": "Limpiar",
          "New Product": "Nuevo Producto",
          "Save Pattern": "Guardar Patrón",
          "Cancel": "Cancelar",
          "Box Dimensions": "Dimensiones",
          "Boxes per Layer": "Cajas por Capa",
          "Max Height": "Altura Máxima",
          "Total Boxes": "Total de Cajas",
          "3D Viewer": "Visualizador 3D",
          "Top View": "Vista Superior",
          "Suggested Improvements": "Mejoras sugeridas"
        }
      }
    }
  });

export default i18n;