// 获取下拉框元素和表格元素
const unitSelect = document.getElementById('unit');
const table = document.getElementById('wordTable');
const rows = table.querySelectorAll('tr');

// 为下拉框添加change事件监听器
unitSelect.addEventListener('change', function() {
    const selectedUnit = this.value;
    console.log("Selected unit: " + selectedUnit); // 打印选中的单元

    // 遍历表格的每一行
    rows.forEach(row => {
        const unitCell = row.querySelector('td.unit');

        // 如果是表头行，始终显示
        if (row.querySelector('th')) {
            row.style.display = '';
        } else if (unitCell) {
            // 如果是单元标题行
            const unitText = unitCell.textContent.trim();
            if (selectedUnit === unitText) {
                row.style.display = '';
                // 显示该单元下的所有行，直到遇到下一个单元标题行
                let nextRow = row.nextElementSibling;
                while (nextRow && !nextRow.querySelector('td.unit')) {
                    nextRow.style.display = '';
                    nextRow = nextRow.nextElementSibling;
                }
            } else {
                row.style.display = 'none';
            }
        } else {
            // 非单元标题行，默认隐藏
            row.style.display = 'none';
        }
    });
});