<script lang="ts">
    import { fade } from 'svelte/transition'
    import type { RecentSong } from '../types'
    import { onMount } from 'svelte'

    let data: RecentSong | undefined
    let isLoading = true

    onMount(async () => {
        data = await fetch('/api/spotify.json').then((c) => c.json())
    })
</script>

<div class="border border-zinc-600 p-2 rounded-lg my-4 relative">
    {#if isLoading}
        <div transition:fade class="absolute top-0 left-0 bg-zinc-950 w-full h-full rounded-md overflow-hidden">
            <div class="w-full h-full animate-pulse bg-zinc-700"></div>
        </div>
    {/if}

    <div class="flex items-center">
        <img class="w-16 h-16 rounded-lg" on:load={() => (isLoading = !isLoading)} src={data?.image} alt="Album Cover" />
        <div class="flex flex-col truncate mx-4">
            <a class="text-lg font-bold truncate hover:underline" href={data?.url}>{data?.name}</a>
            <p class="text-base text-zinc-300">{data?.artist}</p>
        </div>

        <div class="text-sm ring-1 ring-purple-600/40 text-purple-500 bg-purple-600/10 whitespace-nowrap ml-auto px-2 py-1 rounded-md">
            {data?.nowplaying ? 'Now Playing' : 'Last Played'}
        </div>
    </div>
</div>
