## INSTALLATION

* Créer un profil de configuration dédié :

```bash
ant -Dprofile=$USER init
```

* Compléter la configuration générée dans :

```bash 
etc/$USER/build.properties
```

* Configurer et construire le projet : 

```bash
ant configure build
```