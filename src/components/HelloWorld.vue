<template>
	<div>
		<h2>FTA Model 测试</h2>
		<div style="margin-bottom: 20px">
			<el-button size="mini" round @click="init"> 初始化 </el-button>
			<el-button
				size="mini"
				round
				@click="setDiagnoseNodes(['1397110465137475584', '1397114297074581504', '1397114335695732736'])"
			>
				设置诊断节点
			</el-button>
			<el-button size="mini" round @click="removeDiagnoseNodes">移除全部诊断节点</el-button>
			<el-button size="mini" round @click="removeDiagnoseNodes(['1397114335695732736'])">移除诊断节点</el-button>
			<el-button
				size="mini"
				round
				@click="setFaultNodes(['1397114297074581504', '1397110513342611456', '1397114409930719232'])"
			>
				设置故障节点
			</el-button>
			<el-button size="mini" round @click="removeFaultNodes">移除全部故障节点</el-button>
			<el-button size="mini" round @click="removeFaultNodes(['1397114297074581504'])">移除故障节点</el-button>
			<el-button size="mini" round @click="setHighlight('1397110513342611456')">高亮节点</el-button>
			<el-button size="mini" round @click="removeHighlight(['1397110513342611456'])">移除高亮</el-button>
			<el-button size="mini" round @click="centerNode(['1397110513342611456'])">节点居中</el-button>
			<el-button size="mini" round @click="changeCaseStateVisible">
				{{ showCaseState ? '移除' : '显示' }}用例配置状态
			</el-button>
		</div>
		<div style="width: 100%; display: flex; justify-content: center">
			<FtaModel
				ref="ftaModel"
				style="width: 800px; height: 600px"
				:data="graphData"
				:show-case-state="showCaseState"
				@render-done="onRenderDone"
				@node-click="onNodeClick"
			/>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				graphData: [
					{
						nodeId: '1397106291012272129',
						parentId: '0',
						nodeType: 'H',
						faultId: 'FM2025072206413669',
						faultLayer: '1',
						faultName: '故障',
						subsetLogic: 'AND',
						terminalCount: 1,
						caseCount: 0,
						enableCaseCount: 0,
						children: [
							{
								nodeId: '1397110465137475584',
								parentId: '1397106291012272129',
								orderNum: 0,
								nodeType: 'I',
								faultId: 'FM2025072206581178',
								faultLayer: '1.1',
								faultName: '故障节点1',
								subsetLogic: 'AND',
								terminalCount: 1,
								caseCount: 0,
								enableCaseCount: 0,
								children: [
									{
										nodeId: '1397114297074581504',
										parentId: '1397110465137475584',
										nodeType: 'L',
										faultId: 'FM2025072207132535',
										faultLayer: '1.1.1',
										faultName: '故障节点1-1',
										subsetLogic: 'AND',
										terminalCount: 1,
										caseCount: 1,
										enableCaseCount: 1,
									},
									{
										nodeId: '1397114335695732736',
										parentId: '1397110465137475584',
										nodeType: 'L',
										faultId: 'FM2025072207133436',
										faultLayer: '1.1.2',
										faultName: '故障节点1-2',
										subsetLogic: 'AND',
										terminalCount: 1,
										caseCount: 0,
										enableCaseCount: 0,
									},
								],
							},
							{
								nodeId: '1397110513342611456',
								parentId: '1397106291012272129',
								nodeType: 'I',
								faultId: 'FM2025072206582300',
								faultLayer: '1.2',
								faultName: '故障节点2',
								subsetLogic: 'OR',
								terminalCount: 1,
								caseCount: 1,
								enableCaseCount: 1,
								children: [
									{
										nodeId: '1397114377013821440',
										parentId: '1397110513342611456',
										nodeType: 'L',
										faultId: 'FM2025072207134447',
										faultLayer: '1.2.1',
										faultName: '故障节点2-1',
										subsetLogic: 'AND',
										terminalCount: 1,
										caseCount: 1,
										enableCaseCount: 1,
									},
									{
										nodeId: '1397114409930719232',
										parentId: '1397110513342611456',
										nodeType: 'L',
										faultId: 'FM2025072207135239',
										faultLayer: '1.2.2',
										faultName: '故障节点2-2',
										subsetLogic: 'AND',
										terminalCount: 1,
										caseCount: 1,
										enableCaseCount: 1,
									},
								],
							},
						],
					},
				],
				showCaseState: false,
			}
		},
		methods: {
			// 渲染完毕
			onRenderDone() {
				// console.log('render-done', this.$refs.ftaModel)
			},

			// 点击节点
			onNodeClick({ nodeId, nodeRaw }) {
				console.log('node-click', { nodeId, nodeRaw })
			},

			// 初始化
			init() {
				this.showCaseState = false
				this.$nextTick(() => {
					const modelDom = this.$refs.ftaModel
					modelDom.init()
				})
			},

			// 设置诊断节点
			setDiagnoseNodes(nodeIds) {
				const modelDom = this.$refs.ftaModel
				modelDom.setDiagnose(nodeIds)
			},

			// 移除诊断节点
			removeDiagnoseNodes(nodeIds = []) {
				const modelDom = this.$refs.ftaModel
				modelDom.removeDiagnose(nodeIds)
			},

			// 设置故障节点
			setFaultNodes(nodeIds) {
				const modelDom = this.$refs.ftaModel
				modelDom.setFault(nodeIds)
			},

			// 移除故障节点
			removeFaultNodes(nodeIds = []) {
				const modelDom = this.$refs.ftaModel
				modelDom.removeFault(nodeIds)
			},

			// 高亮节点
			setHighlight(nodeId) {
				const modelDom = this.$refs.ftaModel
				modelDom.setHighlight(nodeId)
			},

			// 移除高亮
			removeHighlight() {
				const modelDom = this.$refs.ftaModel
				modelDom.removeHighlight()
			},

			// 节点居中
			centerNode(nodeId) {
				const modelDom = this.$refs.ftaModel
				modelDom.centerElement(nodeId)
			},

			// 修改用例配置状态显示
			changeCaseStateVisible() {
				this.showCaseState = !this.showCaseState
				this.$nextTick(() => {
					const modelDom = this.$refs.ftaModel
					modelDom.init()
				})
			},
		},
	}
</script>

<style scoped></style>
