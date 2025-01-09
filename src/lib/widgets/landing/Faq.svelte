<script lang="ts">
	import { faqData } from '$sharedData';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	import { fade } from 'svelte/transition';

	let showAnswer = $state(false);
</script>

<div class="f-faq wf-section">
	<div class="container-small">
		<h2>Faq</h2>
		<div class="f-faq--inner">
			{#each faqData as { a, q }}
				<div class="f-faq--drop">
					<div onclick={() => (showAnswer = !showAnswer)} class="f-faq--head">
						<div class="subhead-1">{q}</div>
						<div class="f-faq--ico--wr">
							<div class="f-faq--ico w-embed">
								<svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M13.4151 13.4151V4.5H16.5849V13.4151H25.5V16.5849H16.5849V25.5H13.4151V16.5849H4.5V13.4151H13.4151Z"
										fill="currentcolor"
									></path>
								</svg>
							</div>
						</div>
					</div>
					{#if showAnswer}
						<div transition:fade class="f-faq--content">
							<div class="f-faq--content-wr">
								<div class="f-faq--rich w-richtext">
									{#each a as answer}
										<p>
											{answer}
										</p>
									{/each}
									<!-- <ul role="list">
								<li>Fly-to-Earn: fly missions, collect aerial imagery, and get rewarded.</li>
								<li>
									Refer-to-Earn: earn rewards for referring pilots and data buyers. (More on this to
									come!)
								</li>
								<li>Learn-to-Earn: Take our initial pilot training and get rewarded.</li>
							</ul> -->
									<!-- <p>More to follow! Stay up-to-date on all things Spexigon in our Community</p> -->
								</div>
								<a href="#kontakt" class="link-arr w-inline-block">
									<div class="inline">Kontakt</div>
									<div class="link-arr--ico w-embed">
										<svg viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M8 3L8 10C8 14 6 16 2 16H0M8 3L14 7M8 3L2 7"
												stroke="currentcolor"
												stroke-width="2"
												stroke-linejoin="round"
											></path>
										</svg>
									</div>
								</a>
							</div>
						</div>
					{/if}
				</div>
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
</div>

<style lang="postcss">
</style>
