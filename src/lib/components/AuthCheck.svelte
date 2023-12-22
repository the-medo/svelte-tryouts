<script lang="ts">
	import { auth, user } from '$lib/firebase';
	import { signOut } from 'firebase/auth';
</script>

{#if $user}
	<slot/>
{:else}
	<p class="text-error">
		You must be signed in to view this page.
		<a class="btn btn-primary" href="/login">Sign in</a>
	</p>
{/if}