(function() {var implementors = {};
implementors["lazy_static"] = [];implementors["libc"] = [];implementors["libloading"] = [];implementors["shared_library"] = [];implementors["wayland_sys"] = [];implementors["tempfile"] = [];implementors["wayland_kbd"] = [];implementors["num_complex"] = ["impl&lt;T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num_traits/trait.Num.html' title='num_traits::Num'>Num</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=T&gt;&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='num_complex/struct.Complex.html' title='num_complex::Complex'>Complex</a>&lt;T&gt;","impl&lt;'a, T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num_traits/trait.Num.html' title='num_traits::Num'>Num</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=T&gt;&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for &amp;'a <a class='struct' href='num_complex/struct.Complex.html' title='num_complex::Complex'>Complex</a>&lt;T&gt;",];implementors["num_bigint"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='num_bigint/struct.BigUint.html' title='num_bigint::BigUint'>BigUint</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for &amp;'a <a class='struct' href='num_bigint/struct.BigUint.html' title='num_bigint::BigUint'>BigUint</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='enum' href='num_bigint/enum.Sign.html' title='num_bigint::Sign'>Sign</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='num_bigint/struct.BigInt.html' title='num_bigint::BigInt'>BigInt</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for &amp;'a <a class='struct' href='num_bigint/struct.BigInt.html' title='num_bigint::BigInt'>BigInt</a>",];implementors["num_rational"] = ["impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='num_rational/struct.Ratio.html' title='num_rational::Ratio'>Ratio</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num_integer/trait.Integer.html' title='num_integer::Integer'>Integer</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=T&gt;</span>","impl&lt;'a, T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for &amp;'a <a class='struct' href='num_rational/struct.Ratio.html' title='num_rational::Ratio'>Ratio</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num_integer/trait.Integer.html' title='num_integer::Integer'>Integer</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=T&gt;</span>",];implementors["num"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='num/struct.BigUint.html' title='num::BigUint'>BigUint</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for &amp;'a <a class='struct' href='num/struct.BigUint.html' title='num::BigUint'>BigUint</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='enum' href='num_bigint/enum.Sign.html' title='num_bigint::Sign'>Sign</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='num/struct.BigInt.html' title='num::BigInt'>BigInt</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for &amp;'a <a class='struct' href='num/struct.BigInt.html' title='num::BigInt'>BigInt</a>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='num_rational/struct.Ratio.html' title='num_rational::Ratio'>Ratio</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num/trait.Integer.html' title='num::Integer'>Integer</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=T&gt;</span>","impl&lt;'a, T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for &amp;'a <a class='struct' href='num_rational/struct.Ratio.html' title='num_rational::Ratio'>Ratio</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num/trait.Integer.html' title='num::Integer'>Integer</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=T&gt;</span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='num/struct.Complex.html' title='num::Complex'>Complex</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=T&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num/trait.Num.html' title='num::Num'>Num</a></span>","impl&lt;'a, T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for &amp;'a <a class='struct' href='num/struct.Complex.html' title='num::Complex'>Complex</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=T&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num/trait.Num.html' title='num::Num'>Num</a></span>",];implementors["glutin"] = [];implementors["nalgebra"] = ["impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.DVec.html' title='nalgebra::DVec'>DVec</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.DVec1.html' title='nalgebra::DVec1'>DVec1</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.DVec2.html' title='nalgebra::DVec2'>DVec2</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.DVec3.html' title='nalgebra::DVec3'>DVec3</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.DVec4.html' title='nalgebra::DVec4'>DVec4</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.DVec5.html' title='nalgebra::DVec5'>DVec5</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.DVec6.html' title='nalgebra::DVec6'>DVec6</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Vec1.html' title='nalgebra::Vec1'>Vec1</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Vec2.html' title='nalgebra::Vec2'>Vec2</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Vec3.html' title='nalgebra::Vec3'>Vec3</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Vec4.html' title='nalgebra::Vec4'>Vec4</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Vec5.html' title='nalgebra::Vec5'>Vec5</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Vec6.html' title='nalgebra::Vec6'>Vec6</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Pnt1.html' title='nalgebra::Pnt1'>Pnt1</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Pnt2.html' title='nalgebra::Pnt2'>Pnt2</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Pnt3.html' title='nalgebra::Pnt3'>Pnt3</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Pnt4.html' title='nalgebra::Pnt4'>Pnt4</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Pnt5.html' title='nalgebra::Pnt5'>Pnt5</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Pnt6.html' title='nalgebra::Pnt6'>Pnt6</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Quat.html' title='nalgebra::Quat'>Quat</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Vec0.html' title='nalgebra::Vec0'>Vec0</a>&lt;N&gt;",];implementors["glium"] = [];implementors["glutin"] = [];implementors["glium"] = [];implementors["nalgebra"] = ["impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.DVector.html' title='nalgebra::DVector'>DVector</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.DVector1.html' title='nalgebra::DVector1'>DVector1</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.DVector2.html' title='nalgebra::DVector2'>DVector2</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.DVector3.html' title='nalgebra::DVector3'>DVector3</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.DVector4.html' title='nalgebra::DVector4'>DVector4</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.DVector5.html' title='nalgebra::DVector5'>DVector5</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.DVector6.html' title='nalgebra::DVector6'>DVector6</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Vector1.html' title='nalgebra::Vector1'>Vector1</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Vector2.html' title='nalgebra::Vector2'>Vector2</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Vector3.html' title='nalgebra::Vector3'>Vector3</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Vector4.html' title='nalgebra::Vector4'>Vector4</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Vector5.html' title='nalgebra::Vector5'>Vector5</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Vector6.html' title='nalgebra::Vector6'>Vector6</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Point1.html' title='nalgebra::Point1'>Point1</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Point2.html' title='nalgebra::Point2'>Point2</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Point3.html' title='nalgebra::Point3'>Point3</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Point4.html' title='nalgebra::Point4'>Point4</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Point5.html' title='nalgebra::Point5'>Point5</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Point6.html' title='nalgebra::Point6'>Point6</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Quaternion.html' title='nalgebra::Quaternion'>Quaternion</a>&lt;N&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
