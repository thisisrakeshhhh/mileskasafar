import { Package } from "../models/package.model.js";

export async function getAllPackages(req, res) {
  try {
    const { category, minPrice, maxPrice, duration } = req.query;
    const filter = {};

    if (category) filter.category = category;
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }
    if (duration) filter.durationDays = Number(duration);

    const packages = await Package.find(filter).sort({ createdAt: -1 });
    return res.json({ success: true, message: "Packages retrieved", data: packages });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Failed to retrieve packages" });
  }
}

export async function getPackageById(req, res) {
  try {
    const packageItem = await Package.findById(req.params.id);
    if (!packageItem) {
      return res.status(404).json({ success: false, message: "Package not found" });
    }
    return res.json({ success: true, message: "Package retrieved", data: packageItem });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Failed to retrieve package" });
  }
}

export async function createPackage(req, res) {
  try {
    const packageItem = await Package.create(req.body);
    return res.status(201).json({ success: true, message: "Package created successfully", data: packageItem });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Failed to create package" });
  }
}

export async function updatePackage(req, res) {
  try {
    const updatedPackage = await Package.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPackage) {
      return res.status(404).json({ success: false, message: "Package not found" });
    }
    return res.json({ success: true, message: "Package updated successfully", data: updatedPackage });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Failed to update package" });
  }
}

export async function deletePackage(req, res) {
  try {
    const deletedPackage = await Package.findByIdAndDelete(req.params.id);
    if (!deletedPackage) {
      return res.status(404).json({ success: false, message: "Package not found" });
    }
    return res.json({ success: true, message: "Package deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Failed to delete package" });
  }
}
