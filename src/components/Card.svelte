<script lang="ts">
    export let title
    export let sub = ''
    export let url
    export let image
    export let plays = ''

    let isLoading = true
</script>

<div class={`group h-20 block px-2 py-[0.55rem] ring-1 ring-neutral-800 bg-neutral-850 rounded-md truncate`}>
    <div class="flex">
        <div class="max-w-[4rem] flex flex-shrink-0 h-full w-full">
            {#if isLoading}
                <div class="bg-neutral-600 w-full h-full aspect-square animate-pulse rounded-md" />
            {/if}

            <img
                src={image}
                on:load={() => (isLoading = false)}
                class="max-w-full h-full aspect-square flex-grow-0 rounded-md"
                draggable="false"
                alt="Spotify Stats" />
        </div>

        <div class="flex flex-col w-auto mx-4 truncate justify-center">
            <a class="text-lg font-bold group-hover:underline truncate" href={url} {title}>{title}</a>

            {#if sub}
                <p class="text-md text-zinc-400">{sub}</p>
            {/if}
        </div>

        {#if plays}
            <div class="self-center text-sm ring-1 ring-blue-600/40 text-blue-600 bg-blue-600/10 ml-auto whitespace-nowrap mx-1 px-2 py-1 rounded-md">
                {plays} Plays
            </div>
        {/if}
    </div>
</div>
