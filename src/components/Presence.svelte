<script lang="ts">
    import { fade } from 'svelte/transition'
    import Elapsed from '@components/Elapsed.svelte'
    import { type PresenceAPI } from '@modules/Presence'
    import { onMount } from 'svelte'

    let data: PresenceAPI | undefined

    let isLoading = true
    onMount(async () => {
        const a = await fetch('/api/presence.json')
        data = await a.json()
    })
</script>

<div class="h-20 max-w-md my-2 mx-auto block px-2 py-[0.45rem] text-gray-300 border-gray-700 border rounded-md relative">
    {#if isLoading}
        <div transition:fade class="absolute top-0 left-0 bg-p-bg w-full h-full rounded-md">
            <div class="w-full h-full animate-pulse bg-p-bg-secondary" />
        </div>
    {/if}

    <div class="h-16 flex">
        <div class="max-w-[4rem] flex flex-shrink-0 h-full">
            <img on:load={() => (isLoading = false)} src={data?.activity.assets.large_image} class="max-w-full h-full rounded-md aspect-square flex-grow-0" draggable="false" alt="Discord Presence" />
        </div>
        <div class="flex flex-col mx-4 w-fit h-full truncate">
            <h4 class="text-xl font-bold">{data?.activity.name || 'Nothing'}</h4>
            {#if data?.activity.details}
                <p class="text-xs">{data?.activity.details}</p>
            {:else if data?.activity.timestamps && data.activity.timestamps.start != 0}
                <Elapsed date={new Date(data?.activity.timestamps.start)} />
            {:else}
                <p class="text-xs">Just chilling with the boys</p>
            {/if}

            {#if data?.activity.state}
                <p class="text-xs">{data?.activity.state}</p>
            {/if}
        </div>
    </div>
</div>
