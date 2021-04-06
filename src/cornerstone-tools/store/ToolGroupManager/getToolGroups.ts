import { state } from './../index'
import IToolGroup from './IToolGroup'

function getToolGroups(
  renderingEngineUID: string,
  sceneUID: string,
  viewportUID: string
): Array<IToolGroup> {
  const toolGroupsFilteredByUIDs = state.toolGroups.filter((tg) =>
    tg.viewports.some(
      (vp) =>
        vp.renderingEngineUID === renderingEngineUID &&
        (!vp.sceneUID || vp.sceneUID === sceneUID) &&
        (!vp.viewportUID || vp.viewportUID === viewportUID)
    )
  )

  return toolGroupsFilteredByUIDs
}

export default getToolGroups