<script lang="ts">
	import { faqData } from '$sharedData';
	// import {  } from '$widgets';
	import { FaqCard } from '$entitiesLanding';
</script>

<a name="faq"></a>

<section class="f-faq wf-section">
	<div class="container-small">
		<h2>Faq</h2>
		<div class="f-faq--inner">
			{#each faqData as { a, q }}
				<FaqCard {a} {q} />
			{/each}

			<div class="f-faq--drop">
				<div class="f-faq--content">
					<div class="f-faq--content-wr">
						<div class="f-faq--rich w-richtext">
							<p>Dołącz do społeczności: <a href="#">Linkedin</a> | <a href="#">Telegram</a></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
</style>
