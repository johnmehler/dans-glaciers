<script>
</script>

<svelte:head>
    <title>Our Approach - Glacier Archive Project</title>
</svelte:head>

<section class="approach-container">
    <div class="header-section">
        <h1 class="gradient-text">Our Approach</h1>
    </div>

    <div class="approach-content">
        <p>
            The Glacier Archive Project combines historical research, field
            photography, geospatial data, and emerging analytical tools to
            document glacier change and make that information accessible to a
            broad audience. The goal is to build a visual and data-driven
            archive that illustrates how alpine glaciers have evolved over time.
        </p>

        <p>
            The project begins with identifying and cataloging historical
            glacier photographs from archives, publications, and private
            collections. Many of these records exist only as physical prints or
            slides. When necessary, these materials will be digitized through
            high-resolution scanning and cataloged with associated metadata such
            as location, approximate vantage point, and date. Building a
            well-organized archive of historical images provides the foundation
            for repeat photography and further analysis.
        </p>

        <p>
            Fieldwork then focuses on visiting the locations where these
            historical images were originally captured. Using maps, terrain
            analysis, and available geographic information system (GIS) data,
            the project aims to locate the original camera positions and
            recreate those photographs from the same vantage points. These
            repeat photographs provide a powerful visual comparison of glacier
            change across decades.
        </p>

        <p>
            Once collected, the images will be analyzed and paired with
            additional contextual information such as satellite imagery,
            elevation data, and other relevant datasets. Where feasible, these
            materials may also support the creation of three-dimensional or
            interactive visualizations that allow viewers to explore glacier
            landscapes and changes in new ways.
        </p>

        <p>
            The project also serves as an opportunity to explore how modern
            analytical tools, including artificial intelligence, can assist with
            organizing large image archives, identifying geographic features,
            and supporting new forms of data-driven environmental research.
            These tools may also help translate complex environmental
            information into formats that are easier for the public to
            understand.
        </p>

        <p>
            Finally, the Glacier Archive Project aims to develop opportunities
            for citizen scientists and the public to engage with the archive.
            This may include contributing historical photographs, helping
            identify locations in historical images, or participating in other
            collaborative efforts that expand the scope of the archive over
            time.
        </p>
    </div>
</section>

<style>
    .approach-container {
        padding: calc(var(--header-height) + var(--section-padding)) 2rem
            var(--section-padding);
        max-width: var(--container-width);
        margin: 0 auto;
    }

    .header-section {
        text-align: center;
        margin-bottom: 4rem;
    }

    .gradient-text {
        font-size: 3.5rem;
        color: var(--primary);
    }

    .approach-content {
        max-width: 900px;
        margin: 0 auto;
    }

    .approach-content p {
        font-size: 1.2rem;
        line-height: 1.8;
        margin-bottom: 2rem;
        color: var(--dark);
        opacity: 0.85;
    }

    @media (max-width: 768px) {
        .gradient-text {
            font-size: 2.5rem;
        }
        .approach-content p {
            font-size: 1.1rem;
        }
    }
</style>
