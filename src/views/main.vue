<style scoped>

</style>
<template>
	<div>main</div>
</template>
<script>
    export default {
		data: function() {
			return {
				hash: {
					backErr: ""
				}
			}
		},
        methods: {
			changeFunction: function(name) {
				// backErr frontErr simuErr
				console.log(name)
			}
		}
    }
</script>