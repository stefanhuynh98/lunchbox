<script>
	export let columns = [];
	export let rows = [];
</script>

{#if rows.length > 0}
	<table width="100%">
		<tr>
			{#each columns as column}
				<th class="h-[44px] text-left px-[17px]">{column.label}</th>
			{/each}
		</tr>
		{#each rows as row}
			<tr class="even:bg-gray">
				{#each columns as column}
					<td class="h-[44px] px-[17px] text-left">{row[column.name]}</td>
				{/each}
			</tr>
		{/each}
	</table>
{:else}
	No results
{/if}
