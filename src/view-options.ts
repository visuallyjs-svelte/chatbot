import {AnchorLocations, EVENT_TAP, PlainArrowOverlay, type OverlayVisibility} from "@visuallyjs/browser-ui";
import {ACTION_CHOICE, ACTION_INPUT, ACTION_MESSAGE, ACTION_TEST, END, SELECTABLE, START} from "./constants";

import StartComponent from './components/Start.svelte'
import EndComponent from './components/End.svelte'
import MessageComponent from './components/Message.svelte'
import InputComponent from './components/Input.svelte'
import ChoiceComponent from './components/Choice.svelte'
import TestComponent from './components/Test.svelte'

const viewOptions = {
    nodes:{
        [SELECTABLE]:{
            events:{
                [EVENT_TAP]:(p) => {
                    p.model.setSelection(p.obj)
                }
            }
        },
        [START]:{
            parent:SELECTABLE,
            component:StartComponent
        },
        [END]:{
            parent:SELECTABLE,
            component:EndComponent
        },
        [ACTION_MESSAGE]:{
            parent:SELECTABLE,
            component:MessageComponent
        },
        [ACTION_INPUT]:{
            parent:SELECTABLE,
            component:InputComponent
        },
        [ACTION_CHOICE]:{
            parent:SELECTABLE,
            component:ChoiceComponent
        },
        [ACTION_TEST]:{
            parent:SELECTABLE,
            component:TestComponent
        }
    },
    edges:{
        default:{
            deleteButton:"hover" as OverlayVisibility,
            overlays:[
            {
                type:PlainArrowOverlay.type,
                options:{
                    location:1,
                    width:10,
                    length:10
                }
            }
        ],
            label:"{{label}}",
            useHTMLLabel:true,
            events:{
            [EVENT_TAP]:(p) => {
                p.model.setSelection(p.obj)
            }
        }
    }
},
ports:{
    choice:{
        anchor:[AnchorLocations.Left, AnchorLocations.Right ],
            events:{
            [EVENT_TAP]:(p) => {
                debugger
                p.model.setSelection(p.obj)
            }
        }
    }
}
}

export default viewOptions

