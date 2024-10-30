// import { createAction, option } from '@typebot.io/forge'
// import { auth } from '../auth'

// export const openChat = createAction({
  // name: 'URL',
  // options: option.object({
  //   queue: option.string.layout({
  //     label: 'URL',
  //   }),
  //   queueVar: option.string.layout({
  //     accordion: 'Avançado',
  //     label: 'Variável',
  //     isRequired: false,
  //     withVariableButton: true,
  //   }),
  //   responseMapping: option.string.layout({
  //     label: 'Salvar resultado',
  //     inputType: 'variableDropdown',
  //   }),
  // }),
//   getSetVariableIds: ({ responseMapping }) =>
//     responseMapping ? [responseMapping] : [],
//   run: {
//     server: async ({
//       options: { queue, queueVar, responseMapping },
//       variables,
//       credentials,
//     }) => {
//       console.log("queue",queue)
//     },
//   },
// })


import { createAction, option } from "@typebot.io/forge";
import { isDefined, isEmpty } from "@typebot.io/lib/utils";

export const openChat = createAction({
  name: 'URL',
  options: option.object({
    queue_url: option.string.layout({
      label: 'URL',
    }),
    responseMapping: option.string.layout({
      label: 'Salvar resultado',
      inputType: 'variableDropdown',
    }),
  }),
  getSetVariableIds: ({ queue_url }) =>
    queue_url ? [queue_url] : [],
  run: {
    server: async ({
      credentials: { apiKey },
      variables,
      logs,
    }) => {
      console.log("Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
      return logs.add({
        status: "error",
        description: "erroerror",
        details: "texterror",
      });
    },
  },
});
