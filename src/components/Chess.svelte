<script lang="ts">
    import type { Chesscom } from 'src/types'
    import { onMount } from 'svelte'

    let data: Chesscom | undefined
    let isLoading = true

    onMount(async () => {
        data = await fetch('/api/chess.json').then((c) => c.json())

        setTimeout(() => (isLoading = false), 200)
    })
</script>

<p class={`text-6xl font-bold ${isLoading ? 'blur-md text-transparent' : 'transition-all ease-in-out duration-1000 blur-0'}`}>
    {data?.chess_blitz.last.rating || 400} blitz
</p>
<p class={`text-6xl font-bold ${isLoading ? 'blur-md text-transparent' : 'transition-all ease-in-out duration-1000 blur-0'}`}>
    {data?.chess_rapid.last.rating || 400} rapid
</p>
