<template>
        <div class="car-card">
            <slot name="cardBody"></slot>
        </div>
</template>

<script>
export default {

}
</script>

<style scoped>
        /* .car-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;
            max-width: 1300px;
            margin: 0 auto;
        } */

        .car-card img {
        width: 100%; /* Image takes the full width of its container */
        height: 200px; /* Set a fixed height for consistency */
        object-fit: cover; /* Ensures the image is cropped while maintaining its aspect ratio */
        border-radius: 50px;
        margin-bottom: 10px;
        }


        .car-card h3 {
            font-size: 1.5rem;
            margin-top: 10px;
            color: white;
        }

        .car-card p {
            font-size: 1.2rem;
            color: #ff0000;
            margin-top: 5px;
        }

        .drive-now {
            background-color: transparent;
            color: #ff0000;
            font-size: 1rem;
            text-transform: uppercase;
            cursor: pointer;
            border: none;
            letter-spacing: 1px;
            position: relative;
            margin-top: 10px;
        }

        .drive-now::after {
            content: '→';
            margin-left: 10px;
            transition: margin-left 0.3s ease;
        }

        .drive-now:hover::after {
            margin-left: 20px;
        }

        .limited-edition {
            background-color: red;
            color: white;
            font-size: 0.8rem;
            padding: 5px 10px;
            position: absolute;
            top: 10px;
            left: 10px;
            text-transform: uppercase;
            border-radius: 5px;
        }

</style>