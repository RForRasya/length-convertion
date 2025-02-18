document.addEventListener("DOMContentLoaded", () => {
    const convertBtn = document.getElementById("convert-btn")
    const inputValue = document.getElementById("input-value")
    const inputUnit = document.getElementById("input-unit")
    const result = document.getElementById("result")
  
    const conversionFactors = {
      km: 1000,
      m: 1,
      cm: 0.01,
      mm: 0.001,
    }
  
    convertBtn.addEventListener("click", () => {
      const value = Number.parseFloat(inputValue.value)
      const unit = inputUnit.value
  
      if (isNaN(value)) {
        result.textContent = "Masukkan nilai yang valid"
        return
      }
  
      // Konversi input ke meter terlebih dahulu
      const meters = value * conversionFactors[unit]
  
      // Konversi meter ke semua satuan
      const conversions = Object.entries(conversionFactors).map(([toUnit, factor]) => {
        const convertedValue = meters / factor
        return `${convertedValue.toFixed(4)} ${toUnit}`
      })
  
      // Tampilkan hasil
      result.innerHTML = `
              <h3>Hasil Konversi ${value} ${unit}:</h3>
              <ul>
                  ${conversions.map((conversion) => `<li>${conversion}</li>`).join("")}
              </ul>
          `
    })
  
    // Parallax effect
    window.addEventListener("scroll", () => {
      const parallaxElements = document.querySelectorAll(".parallax-header, .parallax-section")
      parallaxElements.forEach((element) => {
        const scrollPosition = window.pageYOffset
        element.style.backgroundPositionY = `${scrollPosition * 0.5}px`
      })
    })
  })
  
  