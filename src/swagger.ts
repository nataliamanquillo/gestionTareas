import swaggerJSDoc from "swagger-jsdoc";
import path from "path";
 
const options : swaggerJSDoc.Options = {
    swaggerDefinition:{

        
            "openapi":"3.0.1",
            "info":{
               "title":"gestion",
               "description":"",
               "version":"1.0.0"
            },
            "tags":[
               
            ],
            "paths":{
               "/":{
                  "get":{
                     "summary":"Listar tareas",
                     "deprecated":false,
                     "description":"",
                     "tags":[
                        
                     ],
                     "parameters":[
                        
                     ],
                     "responses":{
                        "200":{
                           "description":"Listar tareas",
                           "content":{
                              "application/json":{
                                 "schema":{
                                    "type":"array",
                                    "items":{
                                       "type":"object",
                                       "properties":{
                                          "id":{
                                             "type":"integer"
                                          },
                                          "titulo":{
                                             "type":"string"
                                          },
                                          "descripcion":{
                                             "type":"string"
                                          },
                                          "fecha_vencimiento":{
                                             "type":"string"
                                          },
                                          "id_estado":{
                                             "type":"integer"
                                          },
                                          "id_usuario":{
                                             "type":"integer"
                                          },
                                          "createdAt":{
                                             "type":"string"
                                          },
                                          "updatedAt":{
                                             "type":"string"
                                          }
                                       },
                                       "required":[
                                          "id",
                                          "titulo",
                                          "descripcion",
                                          "fecha_vencimiento",
                                          "id_estado",
                                          "id_usuario",
                                          "createdAt",
                                          "updatedAt"
                                       ]
                                    }
                                 },
                                 "examples":{
                                    "1":{
                                       "summary":"Listar tareas",
                                       "value":[
                                          {
                                             "id":20,
                                             "titulo":"tareass_78",
                                             "descripcion":"descripción",
                                             "fecha_vencimiento":"2024-07-29",
                                             "id_estado":3,
                                             "id_usuario":2,
                                             "createdAt":"2024-07-29T15:20:30.000Z",
                                             "updatedAt":"2024-07-29T18:40:09.000Z"
                                          },
                                          {
                                             "id":24,
                                             "titulo":"tareas_88",
                                             "descripcion":"descripción",
                                             "fecha_vencimiento":"2024-07-29",
                                             "id_estado":4,
                                             "id_usuario":2,
                                             "createdAt":"2024-07-29T15:20:30.000Z",
                                             "updatedAt":"2024-07-29T18:39:06.000Z"
                                          }
                                       ]
                                    }
                                 }
                              }
                           }
                        }
                     },
                     "security":[
                        
                     ]
                  }
               },
               "/api/tarea/1":{
                  "get":{
                     "summary":"Ver tarea",
                     "deprecated":false,
                     "description":"",
                     "tags":[
                        
                     ],
                     "parameters":[
                        
                     ],
                     "responses":{
                        "200":{
                           "description":"Ver tarea",
                           "content":{
                              "application/json":{
                                 "schema":{
                                    "type":"object",
                                    "properties":{
                                       "id":{
                                          "type":"integer"
                                       },
                                       "titulo":{
                                          "type":"string"
                                       },
                                       "descripcion":{
                                          "type":"string"
                                       },
                                       "fecha_vencimiento":{
                                          "type":"string"
                                       },
                                       "id_estado":{
                                          "type":"integer"
                                       },
                                       "id_usuario":{
                                          "type":"integer"
                                       },
                                       "createdAt":{
                                          "type":"string"
                                       },
                                       "updatedAt":{
                                          "type":"string"
                                       }
                                    },
                                    "required":[
                                       "id",
                                       "titulo",
                                       "descripcion",
                                       "fecha_vencimiento",
                                       "id_estado",
                                       "id_usuario",
                                       "createdAt",
                                       "updatedAt"
                                    ]
                                 },
                                 "examples":{
                                    "1":{
                                       "summary":"Ver tarea",
                                       "value":{
                                          "id":20,
                                          "titulo":"tareass_78",
                                          "descripcion":"descripción",
                                          "fecha_vencimiento":"2024-07-29",
                                          "id_estado":3,
                                          "id_usuario":2,
                                          "createdAt":"2024-07-29T15:20:30.000Z",
                                          "updatedAt":"2024-07-29T18:40:09.000Z"
                                       }
                                    }
                                 }
                              }
                           }
                        }
                     },
                     "security":[
                        
                     ]
                  },
                  "put":{
                     "summary":"Actualizar tarea",
                     "deprecated":false,
                     "description":"",
                     "tags":[
                        
                     ],
                     "parameters":[
                        
                     ],
                     "responses":{
                        "200":{
                           "description":"Actualizar tarea",
                           "content":{
                              "application/json":{
                                 "schema":{
                                    "type":"object",
                                    "properties":{
                                       "id":{
                                          "type":"integer"
                                       },
                                       "titulo":{
                                          "type":"string"
                                       },
                                       "descripcion":{
                                          "type":"string"
                                       },
                                       "fecha_vencimiento":{
                                          "type":"string"
                                       },
                                       "id_estado":{
                                          "type":"integer"
                                       },
                                       "id_usuario":{
                                          "type":"integer"
                                       },
                                       "createdAt":{
                                          "type":"string"
                                       },
                                       "updatedAt":{
                                          "type":"string"
                                       }
                                    },
                                    "required":[
                                       "id",
                                       "titulo",
                                       "descripcion",
                                       "fecha_vencimiento",
                                       "id_estado",
                                       "id_usuario",
                                       "createdAt",
                                       "updatedAt"
                                    ]
                                 },
                                 "examples":{
                                    "1":{
                                       "summary":"Actualizar tarea",
                                       "value":{
                                          "id":20,
                                          "titulo":"tareass_78",
                                          "descripcion":"descripción",
                                          "fecha_vencimiento":"2024-07-29T00:00:00.000Z",
                                          "id_estado":3,
                                          "id_usuario":2,
                                          "createdAt":"2024-07-29T15:20:30.000Z",
                                          "updatedAt":"2024-07-30T18:43:10.796Z"
                                       }
                                    }
                                 }
                              }
                           }
                        }
                     },
                     "security":[
                        
                     ]
                  },
                  "delete":{
                     "summary":"Eliminar tarea",
                     "deprecated":false,
                     "description":"",
                     "tags":[
                        
                     ],
                     "parameters":[
                        
                     ],
                     "responses":{
                        "200":{
                           "description":"Eliminar tarea",
                           "content":{
                              "application/json":{
                                 "schema":{
                                    "type":"object",
                                    "properties":{
                                       "msg":{
                                          "type":"string"
                                       }
                                    },
                                    "required":[
                                       "msg"
                                    ]
                                 },
                                 "examples":{
                                    "1":{
                                       "summary":"Eliminar tarea",
                                       "value":{
                                          "msg":"Tarea eliminada"
                                       }
                                    }
                                 }
                              }
                           }
                        }
                     },
                     "security":[
                        
                     ]
                  }
               },
               "/api/tarea":{
                  "post":{
                     "summary":"Crear tarea",
                     "deprecated":false,
                     "description":"",
                     "tags":[
                        
                     ],
                     "parameters":[
                        
                     ],
                     "responses":{
                        "200":{
                           "description":"Crear tarea",
                           "content":{
                              "application/json":{
                                 "schema":{
                                    "type":"object",
                                    "properties":{
                                       "id":{
                                          "type":"integer"
                                       },
                                       "titulo":{
                                          "type":"string"
                                       },
                                       "descripcion":{
                                          "type":"string"
                                       },
                                       "fecha_vencimiento":{
                                          "type":"string"
                                       },
                                       "id_estado":{
                                          "type":"integer"
                                       },
                                       "id_usuario":{
                                          "type":"integer"
                                       },
                                       "createdAt":{
                                          "type":"string"
                                       },
                                       "updatedAt":{
                                          "type":"string"
                                       }
                                    },
                                    "required":[
                                       "id",
                                       "titulo",
                                       "descripcion",
                                       "fecha_vencimiento",
                                       "id_estado",
                                       "id_usuario",
                                       "createdAt",
                                       "updatedAt"
                                    ]
                                 },
                                 "examples":{
                                    "1":{
                                       "summary":"Crear tarea",
                                       "value":{
                                          "id":25,
                                          "titulo":"tareas_55",
                                          "descripcion":"descripción",
                                          "fecha_vencimiento":"2024-07-29T00:00:00.000Z",
                                          "id_estado":4,
                                          "id_usuario":2,
                                          "createdAt":"2024-07-29T15:20:30.000Z",
                                          "updatedAt":"2024-07-30T18:41:02.327Z"
                                       }
                                    }
                                 }
                              }
                           }
                        }
                     },
                     "security":[
                        
                     ]
                  }
               },
               "/api/usuario":{
                  "post":{
                     "summary":"Crear ususario",
                     "deprecated":false,
                     "description":"",
                     "tags":[
                        
                     ],
                     "parameters":[
                        
                     ],
                     "requestBody":{
                        "content":{
                           "application/json":{
                              "schema":{
                                 "type":"object",
                                 "properties":{
                                    
                                 }
                              }
                           }
                        }
                     },
                     "responses":{
                        "200":{
                           "description":"Crear ususario",
                           "content":{
                              "application/json":{
                                 "schema":{
                                    "type":"object",
                                    "properties":{
                                       "id":{
                                          "type":"integer"
                                       },
                                       "nombre":{
                                          "type":"string"
                                       },
                                       "correo":{
                                          "type":"string"
                                       },
                                       "contraseña":{
                                          "type":"string"
                                       },
                                       "updatedAt":{
                                          "type":"string"
                                       },
                                       "createdAt":{
                                          "type":"string"
                                       }
                                    },
                                    "required":[
                                       "id",
                                       "nombre",
                                       "correo",
                                       "contraseña",
                                       "updatedAt",
                                       "createdAt"
                                    ]
                                 },
                                 "examples":{
                                    "1":{
                                       "summary":"Crear ususario",
                                       "value":{
                                          "id":8,
                                          "nombre":"Andrea Gomez",
                                          "correo":"Andres123@gmail.com",
                                          "contraseña":"123456",
                                          "updatedAt":"2024-07-30T18:46:38.280Z",
                                          "createdAt":"2024-07-30T18:46:38.280Z"
                                       }
                                    }
                                 }
                              }
                           }
                        }
                     },
                     "security":[
                        
                     ]
                  }
               },
               "/api/estados":{
                  "get":{
                     "summary":"Listar estados",
                     "deprecated":false,
                     "description":"",
                     "tags":[
                        
                     ],
                     "parameters":[
                        
                     ],
                     "responses":{
                        "200":{
                           "description":"localhost:8000/api/estados",
                           "content":{
                              "application/json":{
                                 "schema":{
                                    "type":"array",
                                    "items":{
                                       "type":"object",
                                       "properties":{
                                          "id":{
                                             "type":"integer"
                                          },
                                          "tipo_estado":{
                                             "type":"string"
                                          },
                                          "createdAt":{
                                             "type":"null"
                                          },
                                          "updatedAt":{
                                             "type":"null"
                                          }
                                       },
                                       "required":[
                                          "id",
                                          "tipo_estado",
                                          "createdAt",
                                          "updatedAt"
                                       ]
                                    }
                                 },
                                 "examples":{
                                    "1":{
                                       "summary":"localhost:8000/api/estados",
                                       "value":[
                                          {
                                             "id":2,
                                             "tipo_estado":"hecho",
                                             "createdAt":null,
                                             "updatedAt":null
                                          },
                                          {
                                             "id":3,
                                             "tipo_estado":"en proceso",
                                             "createdAt":null,
                                             "updatedAt":null
                                          },
                                          {
                                             "id":4,
                                             "tipo_estado":"por hacer",
                                             "createdAt":null,
                                             "updatedAt":null
                                          }
                                       ]
                                    }
                                 }
                              }
                           }
                        }
                     },
                     "security":[
                        
                     ]
                  }
               },
               "/api/sesion":{
                  "post":{
                     "summary":"iniciar sesión",
                     "deprecated":false,
                     "description":"",
                     "tags":[
                        
                     ],
                     "parameters":[
                        
                     ],
                     "requestBody":{
                        "content":{
                           "application/json":{
                              "schema":{
                                 "type":"object",
                                 "properties":{
                                    "correo":{
                                       "type":"string"
                                    },
                                    "contraseña":{
                                       "type":"string"
                                    }
                                 },
                                 "required":[
                                    "correo",
                                    "contraseña"
                                 ]
                              },
                              "example":{
                                 "correo":"juan@gmail.com",
                                 "contraseña":"123456"
                              }
                           }
                        }
                     },
                     "responses":{
                        "200":{
                           "description":"iniciar sesión",
                           "content":{
                              "application/json":{
                                 "schema":{
                                    "type":"object",
                                    "properties":{
                                       "Token":{
                                          "type":"string"
                                       },
                                       "id_usuario":{
                                          "type":"integer"
                                       },
                                       "correo":{
                                          "type":"string"
                                       },
                                       "contraseña":{
                                          "type":"string"
                                       }
                                    },
                                    "required":[
                                       "Token",
                                       "id_usuario",
                                       "correo",
                                       "contraseña"
                                    ]
                                 },
                                 "examples":{
                                    "1":{
                                       "summary":"iniciar sesión",
                                       "value":{
                                          "Token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiY29ycmVvIjoianVhbkBnbWFpbC5jb20iLCJjb250cmFzZcOxYSI6IjEyMzQ1NiIsImlhdCI6MTcyMjM2NDI1OH0.uO3cNOZQ3yM8zzalE5ztxSQ--l3LqXvt-E_LA9RMZ6w",
                                          "id_usuario":2,
                                          "correo":"juan@gmail.com",
                                          "contraseña":"123456"
                                       }
                                    }
                                 }
                              }
                           }
                        }
                     },
                     "security":[
                        
                     ]
                  }
               }
            },
            "components":{
               "schemas":{
                  
               },
               "securitySchemes":{
                  
               }
            },
            "servers":[
               
            ]
         },

    apis:['../routes'],
   
}


const swaggerSpec = swaggerJSDoc(options)



export default swaggerSpec
