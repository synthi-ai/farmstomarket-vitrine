#!/bin/bash
cd ~/PhpStormProjects/farmstomarket-vitrine

echo "🚀 Graphify Init - farmstomarket-vitrine"

# Nettoyage
echo "🧹 Nettoyage hooks..."
rm -f .git/hooks/post-commit 2>/dev/null
rm -f .git/hooks/post-checkout 2>/dev/null

# Installation
echo "🔗 Installation hooks..."
graphify hook install

# Mise à jour graphe
echo "📊 Update graph..."
graphify update .

# Clustering
echo "🔍 Clustering..."
graphify cluster-only .

echo "🎉 Terminé !"
echo ""
echo "Ouvre Claude Code et essaie :"
echo "/graphify query \"Summary of the project and main features\""