<script lang="ts">
    import { fade } from 'svelte/transition'
    import type { RecentSong } from '@modules/Presence'
    import { onMount } from 'svelte'

    let data: RecentSong | undefined
    let isLoading = true

    onMount(async () => {
        data = await fetch('/api/presence.json').then((c) => c.json())
        console.log(data)
    })
</script>

<div class="group h-20 max-w-md my-2 mx-auto block px-2 py-[0.45rem] text-gray-300 border-gray-700 border rounded-md relative">
    {#if isLoading}
        <div transition:fade class="absolute top-0 left-0 bg-p-bg w-full h-full rounded-md">
            <div class="w-full h-full animate-pulse bg-p-bg-secondary" />
        </div>
    {/if}

    <div class="h-16 flex">
        <div class="max-w-[4rem] flex flex-shrink-0 h-full">
            <img on:load={() => (isLoading = false)} src={data?.image} class="max-w-full h-full rounded-md aspect-square flex-grow-0" draggable="false" alt="Discord Presence" />
        </div>
        <div class="flex-col mx-4 w-fit h-full truncate">
            <a class="text-lg font-bold group-hover:underline" href={data?.url}>{data?.name}</a>
            <p class="text-md">{data?.artist}</p>
        </div>
    </div>
</div>
