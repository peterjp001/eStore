#!/bin/bash

folder="cart"
files=("CartItemColumns" "CartItemsList" "CartTotals" "ThirdColumn")

# Create folder if it doesn't exist
mkdir -p "$folder"

# Create files with default content
for file in "${files[@]}"; do
    filePath="$folder/$file.tsx"
    if [ ! -f "$filePath" ]; then
        cat <<EOF > "$filePath"
// $file component

const $file = () => {
  return <div>$file</div>;
};

export default $file;
EOF
        echo "Created: $filePath"
    else
        echo "Skipped (already exists): $filePath"
    fi
done

echo "All files processed!"
