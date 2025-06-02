#!/usr/bin/env node

/**
 * Image Organization Script for Bloodroot Tattoo
 * Renames messy hash-named files to organized naming convention
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const publicDir = path.join(__dirname, '..', 'public');
const alexDir = path.join(publicDir, 'greenewitchtattoo-alex');
const jamsonDir = path.join(publicDir, 'jameson-photos');
const profileDir = path.join(publicDir, 'profile-photos');

// Rename Alex's files from hash names to organized names
function organizeAlexImages() {
    console.log('🎨 Organizing Alex\'s images...');
    
    if (!fs.existsSync(alexDir)) {
        console.log('❌ Alex directory not found');
        return;
    }

    const files = fs.readdirSync(alexDir);
    let imageCounter = 1;
    let videoCounter = 1;

    files.forEach(file => {
        const ext = path.extname(file).toLowerCase();
        const oldPath = path.join(alexDir, file);
        
        if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
            const newName = `alex-tattoo-${String(imageCounter).padStart(3, '0')}${ext}`;
            const newPath = path.join(alexDir, newName);
            
            try {
                fs.renameSync(oldPath, newPath);
                console.log(`✅ Renamed: ${file} → ${newName}`);
                imageCounter++;
            } catch (error) {
                console.log(`❌ Failed to rename ${file}: ${error.message}`);
            }
        } else if (['.mp4', '.mov', '.webm'].includes(ext)) {
            const newName = `alex-video-${String(videoCounter).padStart(3, '0')}${ext}`;
            const newPath = path.join(alexDir, newName);
            
            try {
                fs.renameSync(oldPath, newPath);
                console.log(`✅ Renamed: ${file} → ${newName}`);
                videoCounter++;
            } catch (error) {
                console.log(`❌ Failed to rename ${file}: ${error.message}`);
            }
        }
    });
    
    console.log(`📸 Organized ${imageCounter - 1} images and ${videoCounter - 1} videos for Alex`);
}

// Create organized directory structure
function createOrganizedStructure() {
    console.log('📁 Creating organized directory structure...');
    
    const artistDirs = [
        path.join(publicDir, 'artists', 'alex'),
        path.join(publicDir, 'artists', 'kelechi'), 
        path.join(publicDir, 'artists', 'jameson'),
        path.join(publicDir, 'artists', 'profiles')
    ];

    artistDirs.forEach(dir => {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
            console.log(`✅ Created directory: ${dir}`);
        }
    });
}

// Generate WebP versions for optimization
function generateWebPVersions() {
    console.log('🔄 WebP conversion would happen here...');
    console.log('💡 Consider using imagemin or sharp for production WebP conversion');
}

// Create image inventory
function createImageInventory() {
    console.log('📋 Creating image inventory...');
    
    const inventory = {
        alex: [],
        kelechi: [],
        jameson: [],
        lastUpdated: new Date().toISOString()
    };

    // Alex's images
    if (fs.existsSync(alexDir)) {
        inventory.alex = fs.readdirSync(alexDir)
            .filter(file => !file.startsWith('.'))
            .map(file => ({
                filename: file,
                type: path.extname(file).toLowerCase().includes('mp4') ? 'video' : 'image',
                size: fs.statSync(path.join(alexDir, file)).size
            }));
    }

    // Jameson's images  
    if (fs.existsSync(jamsonDir)) {
        inventory.jameson = fs.readdirSync(jamsonDir)
            .filter(file => !file.startsWith('.'))
            .map(file => ({
                filename: file,
                type: 'image',
                size: fs.statSync(path.join(jamsonDir, file)).size
            }));
    }

    // Save inventory
    const inventoryPath = path.join(publicDir, 'image-inventory.json');
    fs.writeFileSync(inventoryPath, JSON.stringify(inventory, null, 2));
    console.log(`✅ Image inventory saved to: ${inventoryPath}`);
}

// Main execution
function main() {
    console.log('🚀 Starting image organization for Bloodroot Tattoo...\n');
    
    try {
        organizeAlexImages();
        createOrganizedStructure();
        createImageInventory();
        generateWebPVersions();
        
        console.log('\n✨ Image organization complete!');
        console.log('📝 Next steps:');
        console.log('   1. Update image references in components');
        console.log('   2. Add proper alt tags for accessibility');
        console.log('   3. Implement lazy loading');
        console.log('   4. Add WebP conversion for production');
        
    } catch (error) {
        console.error('❌ Error during organization:', error);
    }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
    main();
}

export { organizeAlexImages, createOrganizedStructure, createImageInventory }; 