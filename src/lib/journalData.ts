export interface Post {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    paragraphs: string[];
    sources?: string[];
}

export const posts: Post[] = [
    {
        id: "why-glaciers-why-now",
        title: "Why Glaciers, Why Now",
        date: "June 24, 2026",
        excerpt: "In the fall of 2024, Switzerland and Italy agreed to move their shared border. The reason was not political. The glacier that had defined the frontier high on the Matterhorn massif for more than a century had melted enough to shift the watershed beneath it, so the old line no longer matched the ice.",
        paragraphs: [
            "In the fall of 2024, Switzerland and Italy agreed to move their shared border. The reason was not political. The glacier that had defined the frontier high on the Matterhorn massif for more than a century had melted enough to shift the watershed beneath it, so the old line no longer matched the ice. The two countries sat down and redrew the map.",
            "We tend to picture climate change as something measured in centuries (or at least decades) and global averages, abstract enough to argue about or to think “well someone will figure that out.” Glaciers remove that abstraction. They keep a plain physical ledger of every warm summer and thin winter, and right now the ledger is grim.",
            "Since 1976, the world's glaciers, setting aside the Greenland and Antarctic ice sheets, have lost more than 9,000 billion metric tonnes of ice. That is roughly a quarter to a third of all the sea level rise measured, a contribution that now rivals that of rapidly melting Greenland (World Glacier Monitoring Service). About 40 percent of that loss has come in the last decade alone. For three straight years, 2022 through 2024, every glaciated region on Earth lost mass, and 2023 set a record near 600 billion tonnes, the worst single year in five decades (WMO). The 2025 figures, around 408 billion tonnes, offer no real relief.",
            "Numbers on that scale stop meaning much, so here is why they matter to people who will never set foot on a glacier. Mountains supply 55 to 60 percent of the world's annual freshwater flow, and close to two billion people draw their water from them. Two-thirds of the planet's irrigated farmland depends on mountain runoff (UN World Water Development Report, 2025). In the Andes, 85 percent of hydropower comes from mountain catchments. A glacier is a savings account that pays out in the hot, dry months when the rain does not come. As the ice shrinks, the account first overpays, with more meltwater and more flooding, and then it runs dry. Communities from Peru to Pakistan are already living through the early version of that arc. I don’t want to take away from the power of images like the polar bear on the tiny iceberg, but glaciers are more than a symbol, they are a critical source of food and water security in both the developed and developing world.",
            "The Alps, where we will spend most of this project, are the clearest preview we know of. Even if global emissions and warming had stopped completely in 2022, the Alps are already committed to losing at least a third of their ice by mid-century, and on the trend of the last twenty years it is closer to half (Cook et al., 2023). Swiss glaciers gave up about a tenth of their entire volume in the two hot summers of 2022 and 2023. A study published in December 2025 went further and put dates on the disappearances: under the climate policies in place today, perhaps 110 glaciers would survive in central Europe to 2100, about 3 percent of the 3600+ today (Van Tricht et al., 2025). The great Aletsch breaks into pieces, the Rhône becomes a remnant, and stories like the village of Blatten being destroyed in moments by a collapsing glacier will become regular news .",
            "So, why build our glacier archive? We decided to step away for a season to build something we have talked about building for years but have never had the time (or AI enabling technology) to do. The United Nations made 2025 the International Year of Glaciers' Preservation. The attention is welcome but the translation into something a non-specialist can see and feel is still missing.The Glacier Archive Project is an independent effort to document and communicate the changing state of glaciers, using repeat photography, open data, and a set of AI tools we are building as we go. The plan is to put the result into the public domain, an archive anyone can use, because the science here is excellent and well funded, yet most of it lives in journals that ordinary people never open or photographers charge license fees to use.",
            "Repeat photography is the heart of it, and it is beautifully simple. You find where a photographer stood five, ten, fifty, or a hundred years ago, you stand in the same spot, you take the same frame, and then even a kindergartener could play “Spot the Difference.”",
            "Over the next twelve weeks we will move through archival research, fieldwork in the mountains, and a final synthesis, and we will post as we go, including the parts that do not work! Next time we will get into the history of glacier photography and the specific images we hope to match.",
            "Glaciers keep an honest record. Our aim for this project is to help a few more people learn to read it."
        ],
        sources: [
            "World Glacier Monitoring Service, Contribution to sea-level rise",
            "WMO, State of the Global Climate 2024",
            "Nature Reviews Earth & Environment, Global glacier mass change in 2025",
            "UNESCO / UN-Water, World Water Development Report 2025",
            "Cook et al., Committed Ice Loss in the European Alps Until 2050, GRL 2023",
            "Van Tricht et al., Nature Climate Change, Dec 2025, via ETH Zurich"
        ]
    },
    {
        id: "glacier-archive-launch",
        title: "GlacierArchive.org Launch",
        date: "March 7, 2026",
        excerpt: "The Glacier Archive website is now live, serving as the public home for our documentation efforts, pending final approval for the upcoming field expedition.",
        paragraphs: [
            "The Glacier Archive website is now live.",
            "This site will serve as the public home for the Glacier Archive Project, an effort to document glacier change through repeat photography and field observations. Over the coming months we plan to revisit historic glacier viewpoints and recreate photographs taken decades or even more than a century ago.",
            "The goal is simple: build a visual record showing how glaciers have changed through time and make those comparisons accessible to the public.",
            "The project is currently pending final approval for the upcoming field expedition. Once confirmed, this site will host journal updates from the field, photo comparisons, and documentation of the locations visited.",
            "More updates will follow soon as planning progresses."
        ]
    }
];
