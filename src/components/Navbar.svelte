<script lang="ts">
    let isOpen = false
</script>

<nav class="h-16 w-full flex justify-between px-8">
    <div class="self-center">
        <a href="/" class="space-x-2">
            <img class="hover:animate-spin inline" width="32" height="32" src="/gabry-icon.png" alt="Gabry's Avatar" />
            <span class="hover:underline inline">notgabry</span>
        </a>
    </div>
    <div class="self-center">
        <button
            on:click={() => (isOpen = !isOpen)}
            aria-label="Context Menu"
            class="bg-p-accent ring-1 ring-p-accent-2 hover:bg-p-accent-2 transition-all hover:ease-in-out duration-300 text-2xl rounded-md p-1">
            <iconify-icon inline icon="ci:menu-alt-05" class="inline"></iconify-icon>
        </button>

        <div class={`bg-p-accent absolute right-8 mt-2 ring-1 ring-p-accent-2 rounded-md py-2 px-2`} class:hidden={!isOpen} class:flex={isOpen}>
            <ul>
                <li>
                    <a href="/" class="hover:bg-p-bg py-1 px-2 rounded-md w-full inline-block transition-all hover:ease duration-300">Home</a>
                </li>
                <li>
                    <a href="/tech" class="hover:bg-p-bg py-1 px-2 rounded-md w-full inline-block transition-all hover:ease duration-300"
                        >Technologies</a>
                </li>
                <li>
                    <a href="/songs" class="hover:bg-p-bg py-1 px-2 rounded-md w-full inline-block transition-all hover:ease duration-300">Songs</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
