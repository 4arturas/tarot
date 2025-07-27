

const fs = require('fs');
const path = require('path');

const tarotDecks = [
    ["https://gfx.tarot.com/images/site/decks/8-bit/full_size/0.jpg", "8-Bit Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/african/full_size/0.jpg", "African Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/angel/full_size/0.jpg", "Angel Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/apprentice/full_size/0.jpg", "Apprentice Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/aquarian/full_size/0.jpg", "Aquarian Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/archeon/full_size/0.jpg", "Archeon Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/art-nv/full_size/0.jpg", "Art Nouveau Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/art-of-life/full_size/0.jpg", "Art of Life Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/cagliostro/full_size/0.jpg", "Cagliostro Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/cary-yale-visconti/full_size/0.jpg", "Cary-Yale Visconti Tarocchi Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/cat-people/full_size/0.jpg", "Cat People Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/cats-eye/full_size/0.jpg", "Cat's Eye Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/celestial/full_size/0.jpg", "Celestial Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/chinese/full_size/0.jpg", "Chinese Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/chrysalis/full_size/0.jpg", "Chrysalis Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/classic/full_size/0.jpg", "Classic Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/connolly/full_size/0.jpg", "Connolly Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/cosmic/full_size/0.jpg", "Cosmic Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/cosmic-slumber/full_size/0.jpg", "Cosmic Slumber Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/cosmic-slumber/full_size/0.jpg", "Cosmic Slumber Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/crowley/full_size/0.jpg", "Crowley Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/crows-magick/full_size/0.jpg", "Crow's Magick Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/crow/mid_size/0.jpg", "Crow Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/crystal-visions/full_size/0.jpg", "Crystal Visions Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/dark-exact/full_size/0.jpg", "Dark Exact Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/deviant-moon/full_size/0.jpg", "Deviant Moon Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/dragon/full_size/0.jpg", "Dragon Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/dreaming-way/full_size/0.jpg", "Dreaming Way Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/the-dreamkeepers-tarot/full_size/0.jpg", "Dreamkeepers Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/eight-coins-tattoo/full_size/0.jpg", "Eight Coins' Tattoo Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/english-magic/full_size/0.jpg", "English Magic Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/esoterico/full_size/0.jpg", "Esoterico Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/ethereal-visions/full_size/0.jpg", "Ethereal Visions Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/etteilla/full_size/0.jpg", "Etteilla Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/faerie-tarot/full_size/0.jpg", "Faerie Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/fantastical-creatures/full_size/0.jpg", "Fantastical Creatures Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/fantastical/full_size/0.jpg", "Fantastical Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/fenestra/full_size/0.jpg", "Fenestra Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/feng-shui/full_size/0.jpg", "Feng Shui Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/forest-folklore/full_size/0.jpg", "Forest Folklore Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/fradella/full_size/0.jpg", "Fradella Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/gendron/full_size/0.jpg", "Gendron Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/ghosts-spirits/full_size/0.jpg", "Ghosts & Spirits Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/gill/full_size/0.jpg", "Gill Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/goddess/full_size/0.jpg", "Goddess Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/golden-thread/full_size/0.jpg", "Golden Thread Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/gummybear/full_size/0.jpg", "Gummy Bear Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/haindl/full_size/0.jpg", "Haindl Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/halloween/full_size/0.jpg", "Halloween Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/roberts/full_size/0.jpg", "Hanson Roberts Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/heart-and-hands/full_size/0.jpg", "Heart & Hands Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/herbal/full_size/0.jpg", "Herbal Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/hermetic/full_size/0.jpg", "Hermetic Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/ibis/full_size/0.jpg", "Ibis Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/japaridze/full_size/0.jpg", "Japaridze Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/jolanda/full_size/0.jpg", "Jolanda Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/karma/full_size/0.jpg", "Karma Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/lovers-path/full_size/0.jpg", "Lovers Path Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/magic-manga/full_size/0.jpg", "Magic Manga Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/marseilles/full_size/0.jpg", "Marseilles Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/medicine-woman/full_size/0.jpg", "Medicine Woman Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/medieval-cat/full_size/0.jpg", "Medieval Cat Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/medieval-scapini/full_size/0.jpg", "Medieval Scapini Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/melanated/full_size/0.jpg", "Melanated Classic Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/merryday/full_size/0.jpg", "Merry Day Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/modern-medieval/full_size/0.jpg", "Modern Medieval Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/modern-witch/full_size/0.jpg", "Modern Witch Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/morgan-greer/full_size/0.jpg", "Morgan-Greer Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/motherpeace/full_size/0.jpg", "Motherpeace Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/mystic-mondays/full_size/0.jpg", "Mystic Mondays Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/napo/full_size/0.jpg", "Napo Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/new-century/full_size/0.jpg", "New Century Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/new-chapter/full_size/0.jpg", "New Chapter Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/old-english/full_size/0.jpg", "Old English Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/old-path/full_size/0.jpg", "Old Path Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/omegaland/full_size/0.jpg", "Omegaland Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/one-world/full_size/0.jpg", "One World Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/wirth/full_size/0.jpg", "Oswald Wirth Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/paulina/full_size/0.jpg", "Paulina Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/phantasma/full_size/0.jpg", "Phantasma Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/phantasmagoric/full_size/0.jpg", "Phantasmagoric Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/quick-easy/full_size/0.jpg", "Quick and Easy Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/renaissance/full_size/0.jpg", "Renaissance Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/rider/full_size/0.jpg", "Rider Waite Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/royal-thai/full_size/0.jpg", "Royal Thai Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/russian/full_size/0.jpg", "Russian Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/sacred-art/full_size/0.jpg", "Sacred Art Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/sacred-rose/full_size/0.jpg", "Sacred Rose Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/dali/full_size/0.jpg", "Salvador Dali Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/santa-fe/full_size/0.jpg", "Santa Fe Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/simplicity/full_size/0.jpg", "Simplicity Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/smith-waite/full_size/0.jpg", "Smith Waite Centennial Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/spiral/full_size/0.jpg", "Spiral Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/spiritsong/full_size/0.jpg", "Spiritsong Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/stairs/full_size/0.jpg", "Stairs Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/stars/full_size/0.jpg", "Stars Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/starter/full_size/0.jpg", "Starter Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/sun-moon/full_size/0.jpg", "Sun and Moon Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/1jj-swiss/full_size/0.jpg", "Swiss (1JJ) Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/tapestry/full_size/0.jpg", "Tapestry Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/tarot-decoratif/full_size/0.jpg", "Tarot Decoratif Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/tarot-grand-luxe/full_size/0.jpg", "Tarot Grand Luxe Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/tarot-nuages/full_size/0.jpg", "Tarot Nuages Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/tarot-moon-garden/full_size/0.jpg", "Tarot of a Moon Garden Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/tarot-of-dreams/full_size/0.jpg", "Tarot of Dreams Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/tarot-of-mystical-moments/full_size/0.jpg", "Tarot of Mystical Moments Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/tarot-of-the-golden-wheel/full_size/0.jpg", "Tarot of the Golden Wheel Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/tarot-spirit/full_size/0.jpg", "Tarot of the Spirit Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/witches/full_size/0.jpg", "Tarot of the Witches Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/new-palladini-tarot/full_size/0.jpg", "New Palladini Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/ukiyoe/full_size/0.jpg", "Ukiyoe Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/universal-waite/full_size/0.jpg", "Universal Waite Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/vampire/full_size/0.jpg", "Vampire Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/vanessa/full_size/0.jpg", "Vanessa Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/visconti/full_size/0.jpg", "Visconti-Sforza Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/whimsical/full_size/0.jpg", "Whimsical Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/white-numen/full_size/0.jpg", "White Numen Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/winged-spirit/full_size/0.jpg", "Winged Spirit Tarot Deck"],
    ["https://gfx.tarot.com/images/site/decks/zerner-farber/full_size/0.jpg", "Zerner Farber Tarot Deck"],
];

const wikimediaImages = [
    'https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/3/3a/TheLovers.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgement.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/1/11/Wands01.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/0/0f/Wands02.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/f/ff/Wands03.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/a/a4/Wands04.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/9/9d/Wands05.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/3/3b/Wands06.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/e/e4/Wands07.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/6b/Wands08.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/4/4d/Tarot_Nine_of_Wands.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/0/0b/Wands10.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/6a/Wands11.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/1/16/Wands12.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/0/0d/Wands13.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/c/ce/Wands14.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/3/36/Cups01.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/f/f8/Cups02.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/7/7a/Cups03.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/3/35/Cups04.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/d7/Cups05.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/1/17/Cups06.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/a/ae/Cups07.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/60/Cups08.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/2/24/Cups09.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/8/84/Cups10.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/a/ad/Cups11.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/f/fa/Cups12.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Cups13.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/0/04/Cups14.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/1/1a/Swords01.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/9/9e/Swords02.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/0/02/Swords03.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/b/bf/Swords04.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/2/23/Swords05.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/2/29/Swords06.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/3/34/Swords07.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/a/a7/Swords08.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/2/2f/Swords09.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords10.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/4/4c/Swords11.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/b/b0/Swords12.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords13.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/3/33/Swords14.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/f/fd/Pents01.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/9/9f/Pents02.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/4/42/Pents03.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/3/35/Pents04.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/9/96/Pents05.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/a/a6/Pents06.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/6a/Pents07.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/4/49/Pents08.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/f/f0/Pents09.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/4/42/Pents10.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/e/ec/Pents11.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/d5/Pents12.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/8/88/Pents13.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/1/1c/Pents14.jpg',
];

const download = async (url, dest, retries = 3) => {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const arrayBuffer = await response.arrayBuffer();
                const buffer = Buffer.from(arrayBuffer);
                fs.writeFileSync(dest, buffer);
                console.log(`Downloaded ${url}`);
                return;
            }
            console.error(`Failed to download ${url}: ${response.statusText}`);
        } catch (error) {
            console.error(`Error downloading ${url}: ${error.message}`);
        }
        console.log(`Retrying ${url} (${i + 1}/${retries})`);
        await new Promise(resolve => setTimeout(resolve, 1000)); // wait 1 second
    }
    console.error(`Failed to download ${url} after ${retries} retries.`);
};

const rootDir = 'tarot_images';
if (!fs.existsSync(rootDir)) {
    fs.mkdirSync(rootDir);
}

const downloadQueue = [];

tarotDecks.forEach(deck => {
    const deckDir = path.join(rootDir, deck[1].replace(/ /g, '_'));
    if (!fs.existsSync(deckDir)) {
        fs.mkdirSync(deckDir);
    }
    for (let i = 0; i < 78; i++) {
        const url = deck[0].replace('0.jpg', `${i}.jpg`);
        const filename = path.join(deckDir, `${i}.jpg`);
        downloadQueue.push({ url, filename });
    }
});

const wikimediaDir = path.join(rootDir, 'wikimedia_commons');
if (!fs.existsSync(wikimediaDir)) {
    fs.mkdirSync(wikimediaDir);
}

wikimediaImages.forEach(url => {
    const filename = path.join(wikimediaDir, path.basename(url));
    downloadQueue.push({ url, filename });
});

const processQueue = async () => {
    for (const item of downloadQueue) {
        await download(item.url, item.filename);
    }
};

processQueue();
