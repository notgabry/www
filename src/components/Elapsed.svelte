<script lang="ts">
    import { RelativeTime } from '@modules/Presence'
    export let date: Date

    let strings = `${RelativeTime(date)} elapsed`

    setInterval(() => (strings = `${RelativeTime(date)} elapsed`), 1000)
</script>

<p class="text-xs">{strings}</p>
