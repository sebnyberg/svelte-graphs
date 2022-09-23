<script lang="ts">
  import Setting from '$lib/Setting.svelte';
  import Chart from '$lib/Chart.svelte';
</script>

<div class="flex flex-row h-screen">
  <div class="flex-none shrink-0">
    <div class="flex flex-col h-screen bg-main-100 text-slate-200 text-lg
    items-center divide-y pl-6 pr-6">
      <div class="p-4 flex flex-col items-center">
        <p class="font-bold tracking-wide mb-1 text-3xl">ABC123 - A Demo</p>
        <p class="italic mb-6 text-xl">A demo that will blow your mind.</p>
        <Setting name="Setting A" min={0} max={100} value={10}/>

      </div>
      <div class="flex-1 p-4">
        <Setting name="Setting B" min={0} max={25} value={12}/>
        <Setting name="Setting C" min={0} max={60} value={32}/>
        <Setting name="Setting D" min={0} max={10} value={0.25}/>
      </div>
    </div>
  </div>
  <div class="flex-1">
    <div class="grid grid-rows-5 p-4 gap-4 h-screen bg-slate-600">
      <Chart title="measurement 1" yAxisText="" />
      <Chart title="measurement 1" yAxisText="" />
      <Chart title="measurement 1" yAxisText="" />
      <Chart title="measurement 1" yAxisText="" />
      <Chart title="measurement 1" yAxisText="" />
      <!-- <div class="bg-sky-200">021</div>
      <div class="bg-sky-300">022</div>
      <div class="bg-sky-400">023</div>
      <div class="bg-sky-500">024</div> -->
    </div>
  </div>
  <div class="flex-1 bg-indigo-400">
    03
  </div>
</div>
