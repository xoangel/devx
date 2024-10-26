export default {
    //
    graphql: {
      config: {
        endpoint: '/graphql',
        shadowCRUD: true,
        playgroundAlways: false,
        depthLimit: 7,
        amountLimit: 100,
        v4CompatibilityMode: true,
        apolloServer: {
          tracing: false,
        },
      },
    },
  };