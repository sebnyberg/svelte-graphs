<script lang="ts">
  export let min: number;
  export let max: number;
  export let name: string;
  export let value: number = 10;
</script>
<div class="flex flex-col pt-4 pb-4">
  <label class="block text-xl font-medium" for={name}>
    {name}
  </label>
  <input id={name} class="cursor-pointer h-8 w-80" type="range" min={min} max={max} bind:value={value}/>
  <p class="block">Current value: {value}</p>
</div>