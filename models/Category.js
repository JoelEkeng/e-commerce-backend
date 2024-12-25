// Mobile Category Schema
const mobileCategorySchema = new mongoose.Schema({
    name: { type: String, required: true }, // e.g., Smartphones, Tabs, Watches, etc.
  });
  
  const MobileCategory = mongoose.model('MobileCategory', mobileCategorySchema);
  
  module.exports = MobileCategory;


// TV Category Schema
  const tvCategorySchema = new mongoose.Schema({
    name: { type: String, required: true }, // e.g., TVs by Size, TVs by Resolution, Projectors, etc.
    subcategories: [
      {
        name: { type: String, required: true }, // e.g., 98 inches, 85 inches, etc.
      },
    ],
  });
  
  const TVCategory = mongoose.model('TVCategory', tvCategorySchema);
  
  module.exports = TVCategory;

// Appliances Category Schema
  const appliancesCategorySchema = new mongoose.Schema({
    name: { type: String, required: true }, // e.g., Bespoke, Kitchen, etc.
  });
  
  const AppliancesCategory = mongoose.model(
    'AppliancesCategory',
    appliancesCategorySchema
  );
  
  module.exports = AppliancesCategory;


// Computing Category Schema
  const computingCategorySchema = new mongoose.Schema({
    name: { type: String, required: true }, // e.g., Galaxy Books & Laptops, Monitors, etc.
    subcategories: [
      {
        name: { type: String, required: true },
      },
    ],
  });
  
  const ComputingCategory = mongoose.model(
    'ComputingCategory',
    computingCategorySchema
  );
  
  module.exports = ComputingCategory;
  