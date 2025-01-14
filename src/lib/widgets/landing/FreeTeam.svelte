<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'
</script>


<!-- <div class="sec-128-56"> -->
<section class="container-small">
	<!-- <h2>Nasz zespół</h2> -->
	<!-- mt-56 -->
	<div class="w-dyn-list">
		<div role="list" class="c-culture--teams w-dyn-items">
			{#each team as member}
				<div role="listitem" class="w-dyn-item">
					<img
						alt={member.bio}
						loading="eager"
						src={member.img}
						sizes="(max-width: 479px) 44vw, (max-width: 767px) 46vw, (max-width: 991px) 42vw, 299.34375px"
						class="c-culture--teams-img"
					/>
					<div class="c-culture--teams-bootom">
						<div>{member.bio}</div>
						<div class="a-team--slide-position">{member.role}</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style lang="postcss">
</style>
