let natureFacts = [
  {
    description: "Nature is a vast interconnected system that sustains life on Earth. Forests provide oxygen, oceans regulate climate, mountains store water, and biodiversity ensures balance. Every tree, river, and species plays a role in maintaining harmony. Human activity often disrupts this balance, but conservation efforts remind us of the importance of protecting ecosystems for future generations. The beauty of nature lies not only in its landscapes but also in its resilience and ability to adapt. Observing nature teaches patience, balance, and respect for the cycles of life."
  },
  {
    description: "The ocean is Earth's largest ecosystem, covering more than 70% of the planet. It regulates temperature, produces oxygen through phytoplankton, and supports countless species. Coral reefs, often called the rainforests of the sea, provide shelter and food for marine life. Yet pollution, overfishing, and climate change threaten this delicate balance. Protecting oceans ensures the survival of both marine biodiversity and human communities that depend on them."
  },
  {
    description: "Forests are the lungs of our planet, absorbing carbon dioxide and releasing oxygen. They provide habitat for millions of species and resources for human survival. Rainforests, in particular, are biodiversity hotspots, home to plants and animals found nowhere else. Deforestation disrupts these ecosystems, leading to loss of species and climate imbalance. Sustainable forestry and conservation efforts are vital to preserve these green treasures."
  },
  {
    description: "Mountains are natural reservoirs, storing water in glaciers and snow that feed rivers. They influence weather patterns and provide habitats for unique species adapted to high altitudes. Human communities rely on mountains for fresh water, agriculture, and cultural heritage. However, global warming is melting glaciers at alarming rates, threatening water supplies and ecosystems downstream."
  },
  {
    description: "Deserts may seem barren, but they are full of life adapted to extreme conditions. From cacti storing water to nocturnal animals avoiding heat, deserts showcase resilience. The Sahara, the largest hot desert, influences global weather systems. Human activity, such as overgrazing and climate change, can expand deserts, reducing fertile land. Protecting desert ecosystems helps maintain balance in fragile environments."
  },
  {
    description: "Wetlands are among the most productive ecosystems, acting as natural filters for water and buffers against floods. They provide breeding grounds for birds, fish, and amphibians. Despite their importance, wetlands are often drained for agriculture or urban development. Preserving wetlands ensures clean water, biodiversity, and protection against climate impacts."
  },
  {
    description: "The Arctic is a unique ecosystem where ice dominates the landscape. Polar bears, seals, and whales depend on sea ice for survival. The Arctic also plays a crucial role in regulating Earth's climate. Rising temperatures are melting ice caps, threatening species and increasing sea levels worldwide. Protecting the Arctic is essential for global ecological stability."
  },
  {
    description: "Grasslands, also known as prairies or savannas, are home to grazing animals and predators that balance ecosystems. They store carbon in soil and support agriculture. However, overfarming and urbanization reduce grassland areas, impacting biodiversity. Conservation efforts aim to restore these landscapes and protect species like bison, antelope, and lions."
  },
  {
    description: "Rivers are lifelines for civilizations, providing water, food, and transportation. They shape landscapes and support freshwater ecosystems. Pollution, damming, and overuse threaten river health. Protecting rivers ensures sustainable water supplies and biodiversity for generations to come."
  }
];
const sorted = natureFacts.map((names)=>(
  names.description.slice(0,100)
))
console.log(sorted)