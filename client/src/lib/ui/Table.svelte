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
			<tr class="even:bg-gray {row.url ? 'hover:bg-primary/20' : ''}">
				{#each columns as column}
					<td class="text-left">
						<a class="h-[44px] px-[17px] flex items-center gap-2 no-underline hover:opacity:50" href={row.url}>
							{@html row[column.name]}
						</a>
					</td>
				{/each}
			</tr>
		{/each}
	</table>
{:else}
	No results
{/if}
